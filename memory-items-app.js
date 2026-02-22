// ============================================================
// A380 Memory Items — App Logic  (Sort Mode + Recall Mode)
// ============================================================

// ── State ────────────────────────────────────────────────────
const state = {
    currentProcedure: null,
    // Sort mode
    shuffledSteps: [],
    orderedSteps: [],
    checked: false,
    score: { correct: 0, total: 0 },
    sessionResults: [],
    dragSrcIndex: null,
    touchSrcIndex: null,
    touchStartY: 0,
    // Recall mode
    recallScored: false,
};

// ── DOM refs ─────────────────────────────────────────────────
const screens = {
    home: document.getElementById('mi-home-screen'),
    quiz: document.getElementById('mi-quiz-screen'),
    recall: document.getElementById('mi-recall-screen'),
    results: document.getElementById('mi-results-screen'),
};

const dom = {
    // home
    procedureGrid: document.getElementById('mi-procedure-grid'),
    // sort quiz
    procTitle: document.getElementById('mi-proc-title'),
    procRef: document.getElementById('mi-proc-ref'),
    procDesc: document.getElementById('mi-proc-desc'),
    stepCount: document.getElementById('mi-step-count'),
    dropZone: document.getElementById('mi-drop-zone'),
    checkBtn: document.getElementById('mi-check-btn'),
    resetBtn: document.getElementById('mi-reset-btn'),
    homeBtn: document.getElementById('mi-home-btn'),
    feedbackBanner: document.getElementById('mi-feedback-banner'),
    // recall quiz
    recallProcTitle: document.getElementById('mi-recall-proc-title'),
    recallProcRef: document.getElementById('mi-recall-proc-ref'),
    recallProcDesc: document.getElementById('mi-recall-proc-desc'),
    recallStepCount: document.getElementById('mi-recall-step-count'),
    recallInputs: document.getElementById('mi-recall-inputs'),
    recallCheckBtn: document.getElementById('mi-recall-check-btn'),
    recallRevealBtn: document.getElementById('mi-recall-reveal-btn'),
    recallRetryBtn: document.getElementById('mi-recall-retry-btn'),
    recallHomeBtn: document.getElementById('mi-recall-home-btn'),
    recallFeedback: document.getElementById('mi-recall-feedback'),
    // results
    resultTitle: document.getElementById('mi-result-title'),
    resultScore: document.getElementById('mi-result-score'),
    resultList: document.getElementById('mi-result-list'),
    retryBtn: document.getElementById('mi-retry-btn'),
    nextBtn: document.getElementById('mi-next-btn'),
    resultsHomeBtn: document.getElementById('mi-results-home-btn'),
};

// ── Screen management ─────────────────────────────────────────
function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
}

// ── Home screen ───────────────────────────────────────────────
function buildHomeScreen() {
    dom.procedureGrid.innerHTML = '';

    memoryItemsProcedures.forEach(proc => {
        const card = document.createElement('div');
        card.className = 'mi-proc-card';
        card.innerHTML = `
            <div class="mi-card-icon">${getCategoryIcon(proc.category)}</div>
            <div class="mi-card-body">
                <h3 class="mi-card-title">${proc.title}</h3>
                <p class="mi-card-desc">${proc.description}</p>
                <div class="mi-card-meta">
                    <span class="mi-badge">${proc.reference}</span>
                    <span class="mi-badge mi-badge-steps">${proc.steps.length} steps</span>
                </div>
                <div class="mi-mode-btns">
                    <button class="mi-mode-btn mi-mode-btn-sort" data-id="${proc.id}">↕️ Sort</button>
                    <button class="mi-mode-btn mi-mode-btn-recall" data-id="${proc.id}">✏️ Recall</button>
                </div>
            </div>
        `;

        card.querySelector('.mi-mode-btn-sort').addEventListener('click', e => {
            e.stopPropagation();
            startProcedure(proc.id);
        });
        card.querySelector('.mi-mode-btn-recall').addEventListener('click', e => {
            e.stopPropagation();
            startRecall(proc.id);
        });

        dom.procedureGrid.appendChild(card);
    });
}

function getCategoryIcon(cat) {
    const icons = { Abnormal: '⚠️', Emergency: '🚨', Normal: '✅' };
    return icons[cat] || '📋';
}

// ══════════════════════════════════════════════════════════════
// SORT MODE
// ══════════════════════════════════════════════════════════════

function startProcedure(procId) {
    const proc = memoryItemsProcedures.find(p => p.id === procId);
    if (!proc) return;

    state.currentProcedure = proc;
    state.checked = false;
    state.shuffledSteps = shuffle([...proc.steps]);
    state.orderedSteps = [...state.shuffledSteps];

    dom.procTitle.textContent = proc.title;
    dom.procRef.textContent = proc.reference;
    dom.procDesc.textContent = proc.description;
    dom.stepCount.textContent = `${proc.steps.length} steps`;
    dom.checkBtn.disabled = false;
    dom.feedbackBanner.className = 'mi-feedback-banner hidden';

    renderDropZone();
    showScreen('quiz');
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ── Render drop zone ──────────────────────────────────────────
function renderDropZone() {
    dom.dropZone.innerHTML = '';
    state.orderedSteps.forEach((step, index) => {
        const card = createStepCard(step, index);
        dom.dropZone.appendChild(card);
    });
}

function createStepCard(step, index) {
    const card = document.createElement('div');
    card.className = 'mi-step-card';
    card.draggable = true;
    card.dataset.index = index;

    const actorClass = `actor-${(step.actor || 'BOTH').toLowerCase()}`;
    card.innerHTML = `
        <div class="mi-step-handle">⠿</div>
        <div class="mi-step-number">${index + 1}</div>
        <div class="mi-step-body">
            <div class="mi-step-text">${step.text}</div>
            ${step.note ? `<div class="mi-step-note">${step.note}</div>` : ''}
        </div>
        <div class="mi-step-actor ${actorClass}">${step.actor || ''}</div>
    `;

    card.addEventListener('dragstart', onDragStart);
    card.addEventListener('dragover', onDragOver);
    card.addEventListener('dragleave', onDragLeave);
    card.addEventListener('drop', onDrop);
    card.addEventListener('dragend', onDragEnd);

    card.addEventListener('touchstart', onTouchStart, { passive: true });
    card.addEventListener('touchmove', onTouchMove, { passive: false });
    card.addEventListener('touchend', onTouchEnd);

    return card;
}

// ── Drag-and-drop (mouse) ─────────────────────────────────────
function onDragStart(e) {
    state.dragSrcIndex = parseInt(this.dataset.index);
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', state.dragSrcIndex);
}

function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
}

function onDragLeave() {
    this.classList.remove('drag-over');
}

function onDrop(e) {
    e.preventDefault();
    const targetIndex = parseInt(this.dataset.index);
    if (state.dragSrcIndex === targetIndex) return;
    reorderSteps(state.dragSrcIndex, targetIndex);
    this.classList.remove('drag-over');
    renderDropZone();
}

function onDragEnd() {
    document.querySelectorAll('.mi-step-card').forEach(c =>
        c.classList.remove('dragging', 'drag-over')
    );
}

// ── Touch drag (mobile) ───────────────────────────────────────
let touchClone = null;
let touchOffsetX = 0;
let touchOffsetY = 0;

function onTouchStart(e) {
    state.touchSrcIndex = parseInt(this.dataset.index);
    state.touchStartY = e.touches[0].clientY;

    const rect = this.getBoundingClientRect();
    touchOffsetX = e.touches[0].clientX - rect.left;
    touchOffsetY = e.touches[0].clientY - rect.top;

    touchClone = this.cloneNode(true);
    touchClone.style.cssText = `
        position: fixed;
        left: ${rect.left}px;
        top: ${rect.top}px;
        width: ${rect.width}px;
        opacity: 0.85;
        pointer-events: none;
        z-index: 9999;
        transform: scale(1.03);
        box-shadow: 0 12px 40px rgba(0,0,0,0.5);
    `;
    document.body.appendChild(touchClone);
    this.classList.add('dragging');
}

function onTouchMove(e) {
    e.preventDefault();
    if (!touchClone) return;

    const touch = e.touches[0];
    touchClone.style.left = `${touch.clientX - touchOffsetX}px`;
    touchClone.style.top = `${touch.clientY - touchOffsetY}px`;

    touchClone.style.display = 'none';
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    touchClone.style.display = '';

    document.querySelectorAll('.mi-step-card').forEach(c => c.classList.remove('drag-over'));
    const target = el?.closest('.mi-step-card');
    if (target && parseInt(target.dataset.index) !== state.touchSrcIndex) {
        target.classList.add('drag-over');
    }
}

function onTouchEnd(e) {
    if (touchClone) {
        document.body.removeChild(touchClone);
        touchClone = null;
    }

    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const target = el?.closest('.mi-step-card');

    document.querySelectorAll('.mi-step-card').forEach(c =>
        c.classList.remove('dragging', 'drag-over')
    );

    if (target) {
        const targetIndex = parseInt(target.dataset.index);
        if (targetIndex !== state.touchSrcIndex) {
            reorderSteps(state.touchSrcIndex, targetIndex);
            renderDropZone();
        }
    }
}

// ── Reorder helper ────────────────────────────────────────────
function reorderSteps(fromIndex, toIndex) {
    const arr = state.orderedSteps;
    const [moved] = arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, moved);
    if (state.checked) {
        state.checked = false;
        dom.checkBtn.disabled = false;
        dom.feedbackBanner.className = 'mi-feedback-banner hidden';
    }
}

// ── Check answer (Sort) ───────────────────────────────────────
function checkAnswer() {
    state.checked = true;
    dom.checkBtn.disabled = true;

    const correct = state.currentProcedure.steps;
    let correctCount = 0;

    const cards = dom.dropZone.querySelectorAll('.mi-step-card');
    cards.forEach((card, index) => {
        const step = state.orderedSteps[index];
        const isCorrect = step.id === correct[index].id;
        if (isCorrect) correctCount++;

        card.classList.remove('step-correct', 'step-incorrect');
        card.classList.add(isCorrect ? 'step-correct' : 'step-incorrect');

        const numEl = card.querySelector('.mi-step-number');
        if (numEl) numEl.textContent = isCorrect ? '✓' : `${index + 1}`;
    });

    const total = correct.length;
    const pct = Math.round((correctCount / total) * 100);

    dom.feedbackBanner.className = `mi-feedback-banner ${pct === 100 ? 'banner-perfect' : pct >= 60 ? 'banner-good' : 'banner-poor'}`;
    dom.feedbackBanner.innerHTML = pct === 100
        ? `✅ Perfect! All ${total} steps in the correct order.`
        : `${correctCount}/${total} steps correct (${pct}%) — Green = correct position, Red = wrong position`;

    state.sessionResults.push({ procedure: state.currentProcedure, correctCount, total, pct });
}

// ── Results screen (Sort) ─────────────────────────────────────
function showResults() {
    const last = state.sessionResults[state.sessionResults.length - 1];
    if (!last) return;

    dom.resultTitle.textContent = last.procedure.title;
    dom.resultScore.innerHTML = `
        <span class="res-score-num ${last.pct === 100 ? 'perfect' : last.pct >= 60 ? 'good' : 'poor'}">${last.pct}%</span>
        <span class="res-score-label">${last.correctCount} / ${last.total} steps correct</span>
    `;

    dom.resultList.innerHTML = '';
    last.procedure.steps.forEach((step, i) => {
        const userStep = state.orderedSteps[i];
        const isCorrect = userStep?.id === step.id;
        const li = document.createElement('div');
        li.className = `res-step ${isCorrect ? 'res-correct' : 'res-incorrect'}`;
        li.innerHTML = `
            <span class="res-step-num">${i + 1}</span>
            <span class="res-step-icon">${isCorrect ? '✅' : '❌'}</span>
            <span class="res-step-text">${step.text}</span>
            <span class="res-step-actor actor-${(step.actor || 'BOTH').toLowerCase()}">${step.actor || ''}</span>
        `;
        dom.resultList.appendChild(li);
    });

    showScreen('results');
}

// ── Sort Mode event listeners ─────────────────────────────────
dom.checkBtn.addEventListener('click', () => checkAnswer());
dom.resetBtn.addEventListener('click', () => startProcedure(state.currentProcedure.id));
dom.homeBtn.addEventListener('click', () => showScreen('home'));

document.getElementById('mi-view-results-btn').addEventListener('click', () => {
    if (!state.checked) checkAnswer();
    showResults();
});

dom.retryBtn.addEventListener('click', () => startProcedure(state.currentProcedure.id));

dom.nextBtn.addEventListener('click', () => {
    const others = memoryItemsProcedures.filter(p => p.id !== state.currentProcedure.id);
    const next = others[Math.floor(Math.random() * others.length)];
    startProcedure(next.id);
});

dom.resultsHomeBtn.addEventListener('click', () => showScreen('home'));


// ══════════════════════════════════════════════════════════════
// RECALL MODE
// ══════════════════════════════════════════════════════════════

// ── Keyword matching helper ────────────────────────────────────
// Returns a score 0–1: ratio of key tokens found in userAnswer.
const STOP_WORDS = new Set([
    'if', 'the', 'a', 'an', 'or', 'and', 'to', 'as', 'of', 'in',
    'is', 'are', 'not', 'for', 'when', 'at', 'be', 'by', 'on',
    'do', 'its', 'with', 'from', 'until', 'after', 'any', 'all',
]);

function keywordMatch(correct, userAnswer) {
    const normalise = str =>
        str.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');

    const tokens = normalise(correct)
        .split(/\s+/)
        .filter(t => t.length > 1 && !STOP_WORDS.has(t));

    if (tokens.length === 0) return 1; // nothing to match — accept anything

    const answer = normalise(userAnswer);
    const matched = tokens.filter(t => answer.includes(t)).length;
    return matched / tokens.length;
}

// ── Start Recall Mode ─────────────────────────────────────────
function startRecall(procId) {
    const proc = memoryItemsProcedures.find(p => p.id === procId);
    if (!proc) return;

    state.currentProcedure = proc;
    state.recallScored = false;

    dom.recallProcTitle.textContent = proc.title;
    dom.recallProcRef.textContent = proc.reference;
    dom.recallProcDesc.textContent = proc.description;
    dom.recallStepCount.textContent = `${proc.steps.length} steps`;
    dom.recallFeedback.className = 'mi-feedback-banner hidden';
    dom.recallCheckBtn.disabled = false;

    renderRecallInputs();
    showScreen('recall');

    // Auto-focus first input
    const first = dom.recallInputs.querySelector('.mi-recall-input');
    if (first) first.focus();
}

// ── Render blank input rows ────────────────────────────────────
function renderRecallInputs() {
    dom.recallInputs.innerHTML = '';

    state.currentProcedure.steps.forEach((step, i) => {
        const actorClass = `actor-${(step.actor || 'BOTH').toLowerCase()}`;

        const row = document.createElement('div');
        row.className = 'mi-recall-row';
        row.dataset.stepIndex = i;
        row.innerHTML = `
            <div class="mi-recall-num">${i + 1}</div>
            <div class="mi-recall-field">
                <input
                    type="text"
                    class="mi-recall-input"
                    placeholder="Type step ${i + 1}…"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                    data-step-index="${i}"
                />
                <div class="mi-recall-correct-answer" id="mi-recall-answer-${i}"></div>
            </div>
            <div class="mi-recall-actor ${actorClass}">${step.actor || ''}</div>
        `;

        // Allow Tab / Enter to advance to next input
        const input = row.querySelector('.mi-recall-input');
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const next = dom.recallInputs.querySelector(
                    `.mi-recall-input[data-step-index="${i + 1}"]`
                );
                if (next) next.focus();
                else dom.recallCheckBtn.click();
            }
        });

        dom.recallInputs.appendChild(row);
    });
}

// ── Score recall answers ───────────────────────────────────────
const RECALL_THRESHOLD = 0.7; // ≥70% key tokens = correct

function scoreRecall() {
    if (state.recallScored) return;
    state.recallScored = true;
    dom.recallCheckBtn.disabled = true;

    const steps = state.currentProcedure.steps;
    const inputs = dom.recallInputs.querySelectorAll('.mi-recall-input');
    let correctCount = 0;

    inputs.forEach((input, i) => {
        const step = steps[i];
        const userAnswer = input.value.trim();
        const score = userAnswer.length === 0 ? 0 : keywordMatch(step.text, userAnswer);
        const isCorrect = score >= RECALL_THRESHOLD;

        if (isCorrect) correctCount++;

        input.classList.remove('recall-correct', 'recall-incorrect');
        input.classList.add(isCorrect ? 'recall-correct' : 'recall-incorrect');
        input.readOnly = true;

        // Reveal correct answer below wrong/blank inputs
        const answerEl = document.getElementById(`mi-recall-answer-${i}`);
        if (answerEl && !isCorrect) {
            answerEl.textContent = `✓ ${step.text}`;
            answerEl.classList.add('visible');
        }
    });

    const total = steps.length;
    const pct = Math.round((correctCount / total) * 100);

    dom.recallFeedback.className = `mi-feedback-banner ${pct === 100 ? 'banner-perfect' : pct >= 60 ? 'banner-good' : 'banner-poor'}`;
    dom.recallFeedback.innerHTML = pct === 100
        ? `✅ Perfect recall! All ${total} steps correct.`
        : `${correctCount}/${total} steps correct (${pct}%) — Green = matched key words, Red = missed`;
}

// ── Reveal all correct answers ────────────────────────────────
function revealAll() {
    const steps = state.currentProcedure.steps;
    const inputs = dom.recallInputs.querySelectorAll('.mi-recall-input');

    inputs.forEach((input, i) => {
        input.value = steps[i].text;
        input.readOnly = true;
        input.classList.remove('recall-correct', 'recall-incorrect');
        input.classList.add('recall-correct');

        const answerEl = document.getElementById(`mi-recall-answer-${i}`);
        if (answerEl) answerEl.classList.remove('visible');
    });

    // Mark as scored so retry is needed for a fresh attempt
    state.recallScored = true;
    dom.recallCheckBtn.disabled = true;

    dom.recallFeedback.className = 'mi-feedback-banner banner-good';
    dom.recallFeedback.innerHTML = '👁 All answers revealed — review and try again from memory.';
}

// ── Recall Mode event listeners ───────────────────────────────
dom.recallCheckBtn.addEventListener('click', () => scoreRecall());
dom.recallRevealBtn.addEventListener('click', () => revealAll());
dom.recallRetryBtn.addEventListener('click', () => startRecall(state.currentProcedure.id));
dom.recallHomeBtn.addEventListener('click', () => showScreen('home'));


// ── Init ──────────────────────────────────────────────────────
buildHomeScreen();
showScreen('home');
