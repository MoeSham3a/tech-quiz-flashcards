// ============================================================
// A380 Memory Items — Drag-and-Drop Quiz App Logic
// ============================================================

// ── State ────────────────────────────────────────────────────
const state = {
    currentProcedure: null,
    shuffledSteps: [],
    orderedSteps: [],   // user's current arrangement
    checked: false,
    score: { correct: 0, total: 0 },
    sessionResults: [],
    dragSrcIndex: null,
    touchSrcIndex: null,
    touchStartY: 0,
};

// ── DOM refs ─────────────────────────────────────────────────
const screens = {
    home: document.getElementById('mi-home-screen'),
    quiz: document.getElementById('mi-quiz-screen'),
    results: document.getElementById('mi-results-screen'),
};

const dom = {
    // home
    procedureGrid: document.getElementById('mi-procedure-grid'),
    // quiz
    procTitle: document.getElementById('mi-proc-title'),
    procRef: document.getElementById('mi-proc-ref'),
    procDesc: document.getElementById('mi-proc-desc'),
    stepCount: document.getElementById('mi-step-count'),
    dropZone: document.getElementById('mi-drop-zone'),
    checkBtn: document.getElementById('mi-check-btn'),
    resetBtn: document.getElementById('mi-reset-btn'),
    homeBtn: document.getElementById('mi-home-btn'),
    feedbackBanner: document.getElementById('mi-feedback-banner'),
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
        const card = document.createElement('button');
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
            </div>
        `;
        card.addEventListener('click', () => startProcedure(proc.id));
        dom.procedureGrid.appendChild(card);
    });
}

function getCategoryIcon(cat) {
    const icons = { Abnormal: '⚠️', Emergency: '🚨', Normal: '✅' };
    return icons[cat] || '📋';
}

// ── Quiz logic ────────────────────────────────────────────────
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

    // ── Mouse drag events ──
    card.addEventListener('dragstart', onDragStart);
    card.addEventListener('dragover', onDragOver);
    card.addEventListener('dragleave', onDragLeave);
    card.addEventListener('drop', onDrop);
    card.addEventListener('dragend', onDragEnd);

    // ── Touch events ──
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
    document.querySelectorAll('.mi-step-card').forEach(c => {
        c.classList.remove('dragging', 'drag-over');
    });
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

    // Create floating clone
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

    // Highlight card under finger
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

    document.querySelectorAll('.mi-step-card').forEach(c => {
        c.classList.remove('dragging', 'drag-over');
    });

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
    // Clear check state when user reorders
    if (state.checked) {
        state.checked = false;
        dom.checkBtn.disabled = false;
        dom.feedbackBanner.className = 'mi-feedback-banner hidden';
    }
}

// ── Check answer ──────────────────────────────────────────────
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

        // Update step number display
        const numEl = card.querySelector('.mi-step-number');
        if (numEl) {
            numEl.textContent = isCorrect ? '✓' : `${index + 1}`;
        }
    });

    const total = correct.length;
    const pct = Math.round((correctCount / total) * 100);

    // Show feedback banner
    dom.feedbackBanner.className = `mi-feedback-banner ${pct === 100 ? 'banner-perfect' : pct >= 60 ? 'banner-good' : 'banner-poor'}`;
    dom.feedbackBanner.innerHTML = pct === 100
        ? `✅ Perfect! All ${total} steps in the correct order.`
        : `${correctCount}/${total} steps correct (${pct}%) — Green = correct position, Red = wrong position`;

    // Save result
    state.sessionResults.push({
        procedure: state.currentProcedure,
        correctCount,
        total,
        pct,
    });
}

// ── Results screen ────────────────────────────────────────────
function showResults() {
    const last = state.sessionResults[state.sessionResults.length - 1];
    if (!last) return;

    dom.resultTitle.textContent = last.procedure.title;
    dom.resultScore.innerHTML = `
        <span class="res-score-num ${last.pct === 100 ? 'perfect' : last.pct >= 60 ? 'good' : 'poor'}">${last.pct}%</span>
        <span class="res-score-label">${last.correctCount} / ${last.total} steps correct</span>
    `;

    // Show correct order
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

// ── Event listeners ───────────────────────────────────────────
dom.checkBtn.addEventListener('click', () => {
    checkAnswer();
});

dom.resetBtn.addEventListener('click', () => {
    startProcedure(state.currentProcedure.id);
});

dom.homeBtn.addEventListener('click', () => {
    showScreen('home');
});

document.getElementById('mi-view-results-btn').addEventListener('click', () => {
    if (!state.checked) checkAnswer();
    showResults();
});

dom.retryBtn.addEventListener('click', () => {
    startProcedure(state.currentProcedure.id);
});

dom.nextBtn.addEventListener('click', () => {
    // Pick a random different procedure
    const others = memoryItemsProcedures.filter(p => p.id !== state.currentProcedure.id);
    const next = others[Math.floor(Math.random() * others.length)];
    startProcedure(next.id);
});

dom.resultsHomeBtn.addEventListener('click', () => {
    showScreen('home');
});

// ── Init ──────────────────────────────────────────────────────
buildHomeScreen();
showScreen('home');
