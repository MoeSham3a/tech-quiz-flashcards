// ========================================
// A380 Limitations Quiz - App Logic
// ========================================

const limitsState = {
    questions: [],
    currentIndex: 0,
    userAnswers: [],  // { input: string, correct: bool }
    score: 0,
    submitted: false
};

// ── DOM refs (populated after DOMContentLoaded) ──────────────────────────────
let domRefs = {};

document.addEventListener('DOMContentLoaded', () => {
    domRefs = {
        // Screens
        homeScreen: document.getElementById('lim-home-screen'),
        quizScreen: document.getElementById('lim-quiz-screen'),
        resultsScreen: document.getElementById('lim-results-screen'),

        // Home
        startBtn: document.getElementById('lim-start-btn'),

        // Quiz
        categoryBadge: document.getElementById('lim-category'),
        questionNum: document.getElementById('lim-question-num'),
        totalNum: document.getElementById('lim-total-num'),
        progressFill: document.getElementById('lim-progress-fill'),
        questionText: document.getElementById('lim-question-text'),
        unitHint: document.getElementById('lim-unit-hint'),
        answerInput: document.getElementById('lim-answer-input'),
        submitBtn: document.getElementById('lim-submit-btn'),
        feedbackBox: document.getElementById('lim-feedback'),
        feedbackIcon: document.getElementById('lim-feedback-icon'),
        feedbackText: document.getElementById('lim-feedback-text'),
        correctAnswer: document.getElementById('lim-correct-answer'),
        prevBtn: document.getElementById('lim-prev-btn'),
        nextBtn: document.getElementById('lim-next-btn'),
        finishBtn: document.getElementById('lim-finish-btn'),

        // Results
        finalScore: document.getElementById('lim-final-score'),
        finalPct: document.getElementById('lim-final-pct'),
        perfMsg: document.getElementById('lim-perf-msg'),
        reviewList: document.getElementById('lim-review-list'),
        retryBtn: document.getElementById('lim-retry-btn'),
        homeBtn: document.getElementById('lim-home-btn')
    };

    domRefs.startBtn.addEventListener('click', startQuiz);
    domRefs.submitBtn.addEventListener('click', submitAnswer);
    domRefs.prevBtn.addEventListener('click', goToPrev);
    domRefs.nextBtn.addEventListener('click', goToNext);
    domRefs.finishBtn.addEventListener('click', showResults);
    domRefs.retryBtn.addEventListener('click', startQuiz);
    domRefs.homeBtn.addEventListener('click', () => { window.location.href = 'index.html'; });

    // Allow Enter key to submit answer
    domRefs.answerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !domRefs.submitBtn.disabled) {
            submitAnswer();
        }
    });

    showScreen('home');
});

// ── Screen management ────────────────────────────────────────────────────────
function showScreen(name) {
    domRefs.homeScreen.classList.toggle('active', name === 'home');
    domRefs.quizScreen.classList.toggle('active', name === 'quiz');
    domRefs.resultsScreen.classList.toggle('active', name === 'results');
}

// ── Quiz flow ────────────────────────────────────────────────────────────────
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startQuiz() {
    limitsState.questions = shuffleArray(a380LimitsQuestions);
    limitsState.currentIndex = 0;
    limitsState.userAnswers = new Array(limitsState.questions.length).fill(null);
    limitsState.score = 0;
    limitsState.submitted = false;
    showScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = limitsState.questions[limitsState.currentIndex];
    const saved = limitsState.userAnswers[limitsState.currentIndex];
    const total = limitsState.questions.length;
    const idx = limitsState.currentIndex;

    // Header
    domRefs.categoryBadge.textContent = q.category;
    domRefs.questionNum.textContent = idx + 1;
    domRefs.totalNum.textContent = total;
    domRefs.progressFill.style.width = `${((idx + 1) / total) * 100}%`;

    // Question
    domRefs.questionText.textContent = q.question;
    domRefs.unitHint.textContent = q.hint || (q.unit ? `Answer in ${q.unit}` : '');

    // Input state
    if (saved !== null) {
        // Already answered — show saved state
        domRefs.answerInput.value = saved.input;
        domRefs.answerInput.disabled = true;
        domRefs.submitBtn.disabled = true;
        showFeedback(q, saved.correct, saved.input);
    } else {
        domRefs.answerInput.value = '';
        domRefs.answerInput.disabled = false;
        domRefs.submitBtn.disabled = false;
        hideFeedback();
        domRefs.answerInput.focus();
    }

    // Navigation buttons
    domRefs.prevBtn.disabled = idx === 0;

    const isLast = idx === total - 1;
    const allAnswered = limitsState.userAnswers.every(a => a !== null);

    domRefs.nextBtn.classList.toggle('hidden', isLast);
    domRefs.finishBtn.classList.toggle('hidden', !isLast);

    // Next only enabled if current question answered
    domRefs.nextBtn.disabled = saved === null;
    domRefs.finishBtn.disabled = !allAnswered;
}

function normalise(str) {
    return str.trim().toLowerCase().replace(/\s+/g, '');
}

function checkAnswer(q, userInput) {
    const norm = normalise(userInput);
    return q.acceptedAnswers.some(a => normalise(a) === norm);
}

function submitAnswer() {
    const q = limitsState.questions[limitsState.currentIndex];
    const userInput = domRefs.answerInput.value;

    if (!userInput.trim()) return;

    const correct = checkAnswer(q, userInput);

    limitsState.userAnswers[limitsState.currentIndex] = { input: userInput, correct };
    if (correct) limitsState.score++;

    domRefs.answerInput.disabled = true;
    domRefs.submitBtn.disabled = true;
    showFeedback(q, correct, userInput);

    // Re-evaluate nav buttons
    renderNavButtons();
}

function renderNavButtons() {
    const idx = limitsState.currentIndex;
    const total = limitsState.questions.length;
    const isLast = idx === total - 1;
    const allAnswered = limitsState.userAnswers.every(a => a !== null);

    domRefs.nextBtn.classList.toggle('hidden', isLast);
    domRefs.finishBtn.classList.toggle('hidden', !isLast);
    domRefs.nextBtn.disabled = false;
    domRefs.finishBtn.disabled = !allAnswered;
}

function showFeedback(q, correct, userInput) {
    domRefs.feedbackBox.classList.remove('hidden', 'correct', 'incorrect');
    domRefs.feedbackBox.classList.add(correct ? 'correct' : 'incorrect');
    domRefs.feedbackIcon.textContent = correct ? '✅' : '❌';
    domRefs.feedbackText.textContent = correct
        ? 'Correct! Well done.'
        : `Incorrect. You entered: "${userInput}"`;
    domRefs.correctAnswer.textContent = correct
        ? ''
        : `Correct answer: ${q.answer}${q.unit ? ' ' + q.unit : ''}`;
    domRefs.correctAnswer.classList.toggle('hidden', correct);
}

function hideFeedback() {
    domRefs.feedbackBox.classList.add('hidden');
}

function goToNext() {
    if (limitsState.currentIndex < limitsState.questions.length - 1) {
        limitsState.currentIndex++;
        renderQuestion();
    }
}

function goToPrev() {
    if (limitsState.currentIndex > 0) {
        limitsState.currentIndex--;
        renderQuestion();
    }
}

// ── Results ──────────────────────────────────────────────────────────────────
function showResults() {
    const total = limitsState.questions.length;
    const score = limitsState.score;
    const pct = Math.round((score / total) * 100);

    domRefs.finalScore.textContent = `${score} / ${total}`;
    domRefs.finalPct.textContent = `${pct}%`;

    let msg = '';
    if (pct >= 90) msg = '🌟 Outstanding! Exceptional knowledge of A380 limitations!';
    else if (pct >= 75) msg = '🎉 Great job! You know your limitations well!';
    else if (pct >= 60) msg = '👍 Good effort! Keep reviewing the FCOM limitations.';
    else if (pct >= 40) msg = '📚 Keep studying — limitations are critical knowledge.';
    else msg = '💪 Don\'t give up! Review the A380 FCOM LIM section and try again.';
    domRefs.perfMsg.textContent = msg;

    // Build per-question review list
    domRefs.reviewList.innerHTML = '';
    limitsState.questions.forEach((q, i) => {
        const ans = limitsState.userAnswers[i];
        const correct = ans ? ans.correct : false;
        const userInput = ans ? ans.input : '(not answered)';

        const item = document.createElement('div');
        item.className = `review-item ${correct ? 'correct' : 'incorrect'}`;

        item.innerHTML = `
            <div class="review-item-header">
                <span class="review-icon">${correct ? '✅' : '❌'}</span>
                <span class="review-category">${q.category}</span>
            </div>
            <p class="review-question">${q.question}</p>
            <div class="review-answers">
                <span class="review-your-answer ${correct ? 'correct-text' : 'incorrect-text'}">
                    Your answer: <strong>${userInput}</strong>
                </span>
                ${!correct ? `<span class="review-correct-answer">Correct: <strong>${q.answer}${q.unit ? ' ' + q.unit : ''}</strong></span>` : ''}
            </div>
        `;
        domRefs.reviewList.appendChild(item);
    });

    showScreen('results');
}
