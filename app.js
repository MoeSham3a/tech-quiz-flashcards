// ========================================
// Application State
// ========================================

const state = {
    mode: null, // 'exam' or 'study'
    filters: {
        book: 'all',
        manual: 'all'
    },
    // Exam mode specific
    examSection: 1, // 1 for closed book, 2 for open book
    section1Questions: [],
    section2Questions: [],
    section1Answers: [],
    section2Answers: [],
    section1Score: 0,
    section2Score: 0,
    section1TimeUsed: 0,
    section2TimeUsed: 0,
    timerInterval: null,
    timeRemaining: 0, // in seconds
    timerStartTime: null,

    // General
    currentQuestionIndex: 0,
    questions: [],
    userAnswers: [],
    score: 0,
    isReviewMode: false,
    isInReviewMode: false //  For reviewing within active section
};

// ========================================
// DOM Elements
// ========================================

const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    transition: document.getElementById('transition-screen'),
    results: document.getElementById('results-screen')
};

const homeElements = {
    examBtn: document.getElementById('exam-mode-btn'),
    studyBtn: document.getElementById('study-mode-btn'),
    bookFilter: document.getElementById('book-filter'),
    manualFilter: document.getElementById('manual-filter')
};

const quizElements = {
    currentSection: document.getElementById('current-section'),
    sectionBadge: document.getElementById('section-badge'),
    timerBadge: document.getElementById('timer-badge'),
    timerDisplay: document.getElementById('timer-display'),
    currentQuestion: document.getElementById('current-question'),
    totalQuestions: document.getElementById('total-questions'),
    currentScore: document.getElementById('current-score'),
    quitBtn: document.getElementById('quit-btn'),
    progressFill: document.getElementById('progress-fill'),
    questionSection: document.getElementById('question-section'),
    questionManual: document.getElementById('question-manual'),
    questionTopic: document.getElementById('question-topic'),
    questionReference: document.getElementById('question-reference'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackContainer: document.getElementById('feedback-container'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackText: document.getElementById('feedback-text'),
    sourceNotes: document.getElementById('source-notes'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    submitSectionBtn: document.getElementById('submit-section-btn'),
    reviewAnswersBtn: document.getElementById('review-answers-btn')
};

const transitionElements = {
    section1Score: document.getElementById('section1-score'),
    section1Time: document.getElementById('section1-time'),
    startSection2Btn: document.getElementById('start-section2-btn')
};

const resultsElements = {
    finalScore: document.getElementById('final-score'),
    correctCount: document.getElementById('correct-count'),
    incorrectCount: document.getElementById('incorrect-count'),
    percentage: document.getElementById('percentage'),
    performanceMessage: document.getElementById('performance-message'),
    scoreRingFill: document.getElementById('score-ring-fill'),
    reviewBtn: document.getElementById('review-btn'),
    restartBtn: document.getElementById('restart-btn')
};

const remarkElements = {
    modal: document.getElementById('remark-modal'),
    remarkBtn: document.getElementById('remark-btn'),
    remarkCategory: document.getElementById('remark-category'),
    remarkText: document.getElementById('remark-text'),
    submitRemarkBtn: document.getElementById('submit-remark-btn'),
    cancelRemarkBtn: document.getElementById('cancel-remark-btn'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    remarkIndicator: document.getElementById('remark-indicator'),
    remarkCount: document.getElementById('remark-count'),
    existingRemarks: document.getElementById('existing-remarks'),
    adminModal: document.getElementById('admin-modal'),
    adminAccessBtn: document.getElementById('admin-access-btn'),
    closeAdminModalBtn: document.getElementById('close-admin-modal-btn'),
    adminRemarksList: document.getElementById('admin-remarks-list'),
    clearAllRemarksBtn: document.getElementById('clear-all-remarks-btn'),
    exportRemarksBtn: document.getElementById('export-remarks-btn')
};

// ========================================
// Utility Functions
// ========================================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function filterQuestions() {
    let filtered = questionDatabase.questions;

    if (state.filters.book !== 'all') {
        filtered = filtered.filter(q => q.section === state.filters.book);
    }

    if (state.filters.manual !== 'all') {
        filtered = filtered.filter(q => q.manual === state.filters.manual);
    }

    return filtered;
}

function getQuestionsForExam() {
    // Get 20 closed book and 20 open book questions
    const allQuestions = filterQuestions();
    const closedBookQuestions = allQuestions.filter(q => q.section === 'Closed Book');
    const openBookQuestions = allQuestions.filter(q => q.section === 'Open Book');

    const section1 = shuffleArray(closedBookQuestions).slice(0, Math.min(20, closedBookQuestions.length));
    const section2 = shuffleArray(openBookQuestions).slice(0, Math.min(20, openBookQuestions.length));

    if (section1.length === 0 || section2.length === 0) {
        return null;
    }

    return { section1, section2 };
}

function getQuestionsForStudy() {
    const filtered = filterQuestions();
    return shuffleArray(filtered);
}

// ========================================
// Timer Functions
// ========================================

function startTimer(duration) {
    state.timeRemaining = duration;
    state.timerStartTime = Date.now();
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
        state.timeRemaining--;
        updateTimerDisplay();

        if (state.timeRemaining <= 0) {
            handleTimeExpired();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function updateTimerDisplay() {
    const timerElement = quizElements.timerDisplay;
    timerElement.textContent = formatTime(state.timeRemaining);

    // Update timer color based on time remaining
    timerElement.classList.remove('timer-normal', 'timer-warning', 'timer-critical');

    if (state.timeRemaining > 300) { // > 5 minutes
        timerElement.classList.add('timer-normal');
    } else if (state.timeRemaining > 60) { // > 1 minute
        timerElement.classList.add('timer-warning');
    } else {
        timerElement.classList.add('timer-critical');
    }
}

function handleTimeExpired() {
    stopTimer();
    submitCurrentSection();
}

// ========================================
// Quiz Functions
// ========================================

function startQuiz(mode) {
    state.mode = mode;

    if (mode === 'exam') {
        const examQuestions = getQuestionsForExam();

        if (!examQuestions) {
            alert('Not enough questions for exam mode. Need at least 1 Closed Book and 1 Open Book question.');
            return;
        }

        state.section1Questions = examQuestions.section1;
        state.section2Questions = examQuestions.section2;
        state.section1Answers = new Array(state.section1Questions.length).fill(null);
        state.section2Answers = new Array(state.section2Questions.length).fill(null);
        state.section1Score = 0;
        state.section2Score = 0;
        state.examSection = 1;

        startExamSection(1);
    } else {
        // Study mode
        state.questions = getQuestionsForStudy();
        state.userAnswers = new Array(state.questions.length).fill(null);
        state.score = 0;
        state.currentQuestionIndex = 0;
        state.isReviewMode = false;

        if (state.questions.length === 0) {
            alert('No questions available with the selected filters.');
            return;
        }

        // Hide timer and section badges for study mode
        quizElements.sectionBadge.classList.add('hidden');
        quizElements.timerBadge.classList.add('hidden');
        quizElements.reviewAnswersBtn.classList.add('hidden');

        showScreen('quiz');
        displayQuestion();
        updateProgress();
    }
}

function startExamSection(sectionNumber) {
    state.examSection = sectionNumber;
    state.currentQuestionIndex = 0;
    state.isInReviewMode = false;

    if (sectionNumber === 1) {
        state.questions = state.section1Questions;
        state.userAnswers = state.section1Answers;
        startTimer(20 * 60); // 20 minutes
    } else {
        state.questions = state.section2Questions;
        state.userAnswers = state.section2Answers;
        startTimer(40 * 60); // 40 minutes
    }

    // Show timer and section badges for exam mode
    quizElements.sectionBadge.classList.remove('hidden');
    quizElements.timerBadge.classList.remove('hidden');
    quizElements.currentSection.textContent = sectionNumber;

    showScreen('quiz');
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];
    const hasAnswered = userAnswer !== null || state.isReviewMode || state.isInReviewMode;

    // Update header
    quizElements.currentQuestion.textContent = state.currentQuestionIndex + 1;
    quizElements.totalQuestions.textContent = state.questions.length;

    if (state.mode === 'exam') {
        quizElements.currentScore.textContent = state.examSection === 1 ? state.section1Score : state.section2Score;
    } else {
        quizElements.currentScore.textContent = state.score;
    }

    // Update metadata - show only section initially, reveal others after answering
    quizElements.questionSection.textContent = question.section;

    if (hasAnswered) {
        quizElements.questionManual.style.display = 'inline-block';
        quizElements.questionTopic.style.display = 'inline-block';
        quizElements.questionReference.style.display = 'block';

        quizElements.questionManual.textContent = question.manual;
        quizElements.questionTopic.textContent = question.topic;
        quizElements.questionReference.textContent = `Reference: ${question.reference}`;
    } else {
        quizElements.questionManual.style.display = 'none';
        quizElements.questionTopic.style.display = 'none';
        quizElements.questionReference.style.display = 'none';
    }

    // Update question text
    quizElements.questionText.textContent = question.question;

    // Display options
    quizElements.optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.index = index;

        // If in review mode or answer already submitted
        if (state.isReviewMode || state.isInReviewMode || userAnswer !== null) {
            button.disabled = true;

            if (index === question.correct_answer) {
                button.classList.add('correct');
            }

            if (userAnswer === index && index !== question.correct_answer) {
                button.classList.add('incorrect');
            }

            if (userAnswer === index) {
                button.classList.add('selected');
            }
        } else {
            button.addEventListener('click', () => selectAnswer(index));
        }

        quizElements.optionsContainer.appendChild(button);
    });

    // Update feedback
    if (userAnswer !== null || state.isReviewMode || state.isInReviewMode) {
        showFeedback(question, userAnswer);
    } else {
        quizElements.feedbackContainer.classList.add('hidden');
    }

    // Update navigation buttons
    updateNavigationButtons();
    updateProgress();
    updateRemarkIndicator(); // Show remark indicator if remarks exist
}

function selectAnswer(answerIndex) {
    const question = state.questions[state.currentQuestionIndex];
    state.userAnswers[state.currentQuestionIndex] = answerIndex;

    // Update score
    if (answerIndex === question.correct_answer) {
        if (state.mode === 'exam') {
            if (state.examSection === 1) {
                state.section1Score++;
            } else {
                state.section2Score++;
            }
        } else {
            state.score++;
        }
    }

    // Update UI
    displayQuestion();
}

function showFeedback(question, userAnswer) {
    const isCorrect = userAnswer === question.correct_answer;

    quizElements.feedbackContainer.classList.remove('hidden', 'correct', 'incorrect');
    quizElements.feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');

    quizElements.feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    quizElements.feedbackText.textContent = isCorrect
        ? 'Correct! Well done.'
        : `Incorrect. The correct answer is: ${question.options[question.correct_answer]}`;

    // Show source notes if available
    if (question.source_notes) {
        quizElements.sourceNotes.classList.remove('hidden');
        quizElements.sourceNotes.textContent = `Note: ${question.source_notes}`;
    } else {
        quizElements.sourceNotes.classList.add('hidden');
    }
}

function updateNavigationButtons() {
    const isFirstQuestion = state.currentQuestionIndex === 0;
    const isLastQuestion = state.currentQuestionIndex === state.questions.length - 1;
    const hasAnswered = state.userAnswers[state.currentQuestionIndex] !== null;

    // Previous button
    quizElements.prevBtn.disabled = isFirstQuestion;

    // Review answers button (only in exam mode)
    if (state.mode === 'exam' && !state.isInReviewMode) {
        quizElements.reviewAnswersBtn.classList.remove('hidden');
    } else {
        quizElements.reviewAnswersBtn.classList.add('hidden');
    }

    // Next/Submit buttons
    if (state.mode === 'exam') {
        if (isLastQuestion) {
            quizElements.nextBtn.classList.add('hidden');
            quizElements.submitSectionBtn.classList.remove('hidden');
            quizElements.submitSectionBtn.disabled = false; // Allow early submission
        } else {
            quizElements.nextBtn.classList.remove('hidden');
            quizElements.submitSectionBtn.classList.add('hidden');
            quizElements.nextBtn.disabled = !hasAnswered && !state.isInReviewMode;
        }
    } else {
        // Study mode
        if (isLastQuestion) {
            quizElements.nextBtn.classList.add('hidden');
            quizElements.submitSectionBtn.classList.remove('hidden');
            const allAnswered = state.userAnswers.every(answer => answer !== null);
            quizElements.submitSectionBtn.disabled = !allAnswered;
        } else {
            quizElements.nextBtn.classList.remove('hidden');
            quizElements.submitSectionBtn.classList.add('hidden');
            quizElements.nextBtn.disabled = !hasAnswered && !state.isReviewMode;
        }
    }
}

function updateProgress() {
    const progress = ((state.currentQuestionIndex + 1) / state.questions.length) * 100;
    quizElements.progressFill.style.width = `${progress}%`;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        displayQuestion();
    }
}

function enterReviewMode() {
    state.isInReviewMode = true;
    state.currentQuestionIndex = 0;
    displayQuestion();
}

function exitReviewMode() {
    state.isInReviewMode = false;
    displayQuestion();
}

function submitCurrentSection() {
    if (state.mode === 'exam') {
        stopTimer();

        // Calculate time used
        const timeUsed = state.examSection === 1 ?
            (20 * 60) - state.timeRemaining :
            (40 * 60) - state.timeRemaining;

        if (state.examSection === 1) {
            state.section1TimeUsed = timeUsed;
            state.section1Answers = [...state.userAnswers];
            showTransitionScreen();
        } else {
            state.section2TimeUsed = timeUsed;
            state.section2Answers = [...state.userAnswers];
            showFinalResults();
        }
    } else {
        showStudyResults();
    }
}

function quitQuiz() {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
        stopTimer();
        resetState();
        showScreen('home');
    }
}

// ========================================
// Transition Screen
// ========================================

function showTransitionScreen() {
    transitionElements.section1Score.textContent = `${state.section1Score}/${state.section1Questions.length}`;
    transitionElements.section1Time.textContent = formatTime(state.section1TimeUsed);
    showScreen('transition');
}

// ========================================
// Results Functions
// ========================================

function showFinalResults() {
    const totalQuestions = state.section1Questions.length + state.section2Questions.length;
    const correctAnswers = state.section1Score + state.section2Score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Update results display
    resultsElements.finalScore.textContent = `${correctAnswers}/${totalQuestions}`;
    resultsElements.correctCount.textContent = correctAnswers;
    resultsElements.incorrectCount.textContent = incorrectAnswers;
    resultsElements.percentage.textContent = `${percentage}%`;

    updateScoreRing(percentage);
    updatePerformanceMessage(percentage);

    showScreen('results');
}

function showStudyResults() {
    const totalQuestions = state.questions.length;
    const correctAnswers = state.score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Update results display
    resultsElements.finalScore.textContent = `${correctAnswers}/${totalQuestions}`;
    resultsElements.correctCount.textContent = correctAnswers;
    resultsElements.incorrectCount.textContent = incorrectAnswers;
    resultsElements.percentage.textContent = `${percentage}%`;

    updateScoreRing(percentage);
    updatePerformanceMessage(percentage);

    showScreen('results');
}

function updateScoreRing(percentage) {
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    resultsElements.scoreRingFill.style.strokeDashoffset = offset;

    if (!document.querySelector('#scoreGradient')) {
        const svg = document.querySelector('.score-ring');
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'scoreGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');

        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('style', 'stop-color:hsl(230, 100%, 60%);stop-opacity:1');

        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('style', 'stop-color:hsl(280, 100%, 60%);stop-opacity:1');

        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        svg.appendChild(defs);
    }
}

function updatePerformanceMessage(percentage) {
    let message = '';
    if (percentage >= 90) {
        message = '🌟 Outstanding! You have exceptional knowledge!';
    } else if (percentage >= 75) {
        message = '🎉 Great job! You\'re doing very well!';
    } else if (percentage >= 60) {
        message = '👍 Good work! Keep practicing to improve.';
    } else if (percentage >= 50) {
        message = '📚 You\'re making progress. Review the material and try again.';
    } else {
        message = '💪 Don\'t give up! More study time will help you improve.';
    }
    resultsElements.performanceMessage.textContent = message;
}

function reviewAnswers() {
    if (state.mode === 'exam') {
        // For exam mode, review all questions from both sections
        state.questions = [...state.section1Questions, ...state.section2Questions];
        state.userAnswers = [...state.section1Answers, ...state.section2Answers];
        state.score = state.section1Score + state.section2Score;
    }

    state.isReviewMode = true;
    state.currentQuestionIndex = 0;

    // Hide timer and review button during final review
    quizElements.sectionBadge.classList.add('hidden');
    quizElements.timerBadge.classList.add('hidden');
    quizElements.reviewAnswersBtn.classList.add('hidden');

    showScreen('quiz');
    displayQuestion();
}

function restartQuiz() {
    stopTimer();
    resetState();
    showScreen('home');
}

function resetState() {
    state.mode = null;
    state.examSection = 1;
    state.section1Questions = [];
    state.section2Questions = [];
    state.section1Answers = [];
    state.section2Answers = [];
    state.section1Score = 0;
    state.section2Score = 0;
    state.section1TimeUsed = 0;
    state.section2TimeUsed = 0;
    state.currentQuestionIndex = 0;
    state.questions = [];
    state.userAnswers = [];
    state.score = 0;
    state.isReviewMode = false;
    state.isInReviewMode = false;
    state.timeRemaining = 0;
}

// ========================================
// Remark System Functions
// ========================================

// LocalStorage Management
function getRemarks() {
    const remarks = localStorage.getItem('quiz_remarks');
    return remarks ? JSON.parse(remarks) : {};
}

function saveRemarks(remarks) {
    localStorage.setItem('quiz_remarks', JSON.stringify(remarks));
}

function addRemark(questionId, category, suggestion) {
    const remarks = getRemarks();

    if (!remarks[questionId]) {
        remarks[questionId] = [];
    }

    const remark = {
        id: `remark_${Date.now()}`,
        questionId: questionId,
        category: category,
        suggestion: suggestion,
        timestamp: Date.now(),
        status: 'pending'
    };

    remarks[questionId].push(remark);
    saveRemarks(remarks);
    return remark;
}

function getRemarksForQuestion(questionId) {
    const remarks = getRemarks();
    return remarks[questionId] || [];
}

function clearRemark(questionId, remarkId) {
    const remarks = getRemarks();

    if (remarks[questionId]) {
        remarks[questionId] = remarks[questionId].filter(r => r.id !== remarkId);

        // Remove question entry if no remarks left
        if (remarks[questionId].length === 0) {
            delete remarks[questionId];
        }

        saveRemarks(remarks);
    }
}

function clearAllRemarks() {
    if (confirm('Are you sure you want to clear ALL remarks? This cannot be undone.')) {
        localStorage.removeItem('quiz_remarks');
        updateRemarkIndicator();
        showAdminPanel(); // Refresh admin panel
    }
}

// Modal Controls
function openRemarkModal() {
    const question = state.questions[state.currentQuestionIndex];
    remarkElements.modal.classList.remove('hidden');
    remarkElements.remarkText.value = '';
    remarkElements.remarkCategory.value = 'phrasing';
    displayExistingRemarksInModal(question.id);
}

function closeRemarkModal() {
    remarkElements.modal.classList.add('hidden');
}

function displayExistingRemarksInModal(questionId) {
    const remarks = getRemarksForQuestion(questionId);
    const container = remarkElements.existingRemarks;

    container.innerHTML = '';

    if (remarks.length > 0) {
        const title = document.createElement('h3');
        title.textContent = 'Existing Remarks:';
        container.appendChild(title);

        remarks.forEach(remark => {
            const item = document.createElement('div');
            item.className = 'remark-item';

            const header = document.createElement('div');
            header.className = 'remark-item-header';

            const category = document.createElement('span');
            category.className = 'remark-category';
            category.textContent = remark.category.replace('_', ' ');

            const timestamp = document.createElement('span');
            timestamp.className = 'remark-timestamp';
            timestamp.textContent = new Date(remark.timestamp).toLocaleDateString();

            header.appendChild(category);
            header.appendChild(timestamp);

            const suggestion = document.createElement('div');
            suggestion.className = 'remark-suggestion';
            suggestion.textContent = remark.suggestion;

            item.appendChild(header);
            item.appendChild(suggestion);
            container.appendChild(item);
        });
    }
}

function submitRemark() {
    const question = state.questions[state.currentQuestionIndex];
    const category = remarkElements.remarkCategory.value;
    const suggestion = remarkElements.remarkText.value.trim();

    if (!suggestion) {
        alert('Please enter a suggestion or description.');
        return;
    }

    addRemark(question.id, category, suggestion);
    updateRemarkIndicator();
    closeRemarkModal();

    // Show confirmation
    alert('Thank you! Your remark has been submitted.');
}

function updateRemarkIndicator() {
    const question = state.questions[state.currentQuestionIndex];
    if (!question) return;

    const remarks = getRemarksForQuestion(question.id);

    if (remarks.length > 0) {
        remarkElements.remarkIndicator.classList.remove('hidden');
        remarkElements.remarkCount.textContent = remarks.length;
    } else {
        remarkElements.remarkIndicator.classList.add('hidden');
    }
}

// Admin Panel
function showAdminPanel() {
    remarkElements.adminModal.classList.remove('hidden');
    loadAdminRemarks();
}

function closeAdminPanel() {
    remarkElements.adminModal.classList.add('hidden');
}

function loadAdminRemarks() {
    const remarks = getRemarks();
    const container = remarkElements.adminRemarksList;

    container.innerHTML = '';

    const questionIds = Object.keys(remarks);

    if (questionIds.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-muted); padding: var(--spacing-lg);">No remarks found.</p>';
        return;
    }

    questionIds.forEach(questionId => {
        const question = questionDatabase.questions.find(q => q.id === questionId);

        if (question && remarks[questionId].length > 0) {
            const card = document.createElement('div');
            card.className = 'admin-remark-card';

            const header = document.createElement('div');
            header.className = 'admin-remark-header';

            const questionIdEl = document.createElement('div');
            questionIdEl.className = 'admin-question-id';
            questionIdEl.textContent = `Question ID: ${questionId}`;

            header.appendChild(questionIdEl);

            const questionText = document.createElement('div');
            questionText.className = 'admin-question-text';
            questionText.textContent = question.question.substring(0, 100) + '...';

            card.appendChild(header);
            card.appendChild(questionText);

            // Display all remarks for this question
            remarks[questionId].forEach(remark => {
                const remarkItem = document.createElement('div');
                remarkItem.className = 'remark-item';
                remarkItem.style.marginTop = 'var(--spacing-sm)';

                const remarkHeader = document.createElement('div');
                remarkHeader.style.display = 'flex';
                remarkHeader.style.justifyContent = 'space-between';
                remarkHeader.style.marginBottom = 'var(--spacing-xs)';

                const remarkCategory = document.createElement('span');
                remarkCategory.className = 'remark-category';
                remarkCategory.textContent = remark.category.replace('_', ' ');

                const clearBtn = document.createElement('button');
                clearBtn.className = 'clear-remark-btn';
                clearBtn.textContent = 'Clear';
                clearBtn.onclick = () => {
                    clearRemark(questionId, remark.id);
                    loadAdminRemarks();
                };

                remarkHeader.appendChild(remarkCategory);
                remarkHeader.appendChild(clearBtn);

                const remarkSuggestion = document.createElement('div');
                remarkSuggestion.className = 'remark-suggestion';
                remarkSuggestion.textContent = remark.suggestion;

                const remarkTimestamp = document.createElement('div');
                remarkTimestamp.className = 'remark-timestamp';
                remarkTimestamp.style.marginTop = 'var(--spacing-xs)';
                remarkTimestamp.textContent = `Submitted: ${new Date(remark.timestamp).toLocaleString()}`;

                remarkItem.appendChild(remarkHeader);
                remarkItem.appendChild(remarkSuggestion);
                remarkItem.appendChild(remarkTimestamp);

                card.appendChild(remarkItem);
            });

            container.appendChild(card);
        }
    });
}

function exportRemarks() {
    const remarks = getRemarks();
    const exportData = {
        exportDate: new Date().toISOString(),
        totalQuestions: Object.keys(remarks).length,
        remarks: remarks
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `quiz_remarks_${Date.now()}.json`;
    link.click();

    URL.revokeObjectURL(url);
}

// Enable admin mode with keyboard shortcut (Ctrl+Alt+A)
let adminModeEnabled = false;

function toggleAdminMode() {
    adminModeEnabled = !adminModeEnabled;

    if (adminModeEnabled) {
        remarkElements.adminAccessBtn.classList.remove('hidden');
        console.log('Admin mode enabled');
    } else {
        remarkElements.adminAccessBtn.classList.add('hidden');
        console.log('Admin mode disabled');
    }
}

// ========================================
// Event Listeners
// ========================================

// Home screen
homeElements.examBtn.addEventListener('click', () => startQuiz('exam'));
homeElements.studyBtn.addEventListener('click', () => startQuiz('study'));

homeElements.bookFilter.addEventListener('change', (e) => {
    state.filters.book = e.target.value;
});

homeElements.manualFilter.addEventListener('change', (e) => {
    state.filters.manual = e.target.value;
});

// Quiz screen
quizElements.prevBtn.addEventListener('click', prevQuestion);
quizElements.nextBtn.addEventListener('click', nextQuestion);
quizElements.submitSectionBtn.addEventListener('click', submitCurrentSection);
quizElements.quitBtn.addEventListener('click', quitQuiz);
quizElements.reviewAnswersBtn.addEventListener('click', enterReviewMode);

// Transition screen
transitionElements.startSection2Btn.addEventListener('click', () => startExamSection(2));

// Results screen
resultsElements.reviewBtn.addEventListener('click', reviewAnswers);
resultsElements.restartBtn.addEventListener('click', restartQuiz);

// Remark system
remarkElements.remarkBtn.addEventListener('click', openRemarkModal);
remarkElements.submitRemarkBtn.addEventListener('click', submitRemark);
remarkElements.cancelRemarkBtn.addEventListener('click', closeRemarkModal);
remarkElements.closeModalBtn.addEventListener('click', closeRemarkModal);
remarkElements.adminAccessBtn.addEventListener('click', showAdminPanel);
remarkElements.closeAdminModalBtn.addEventListener('click', closeAdminPanel);
remarkElements.clearAllRemarksBtn.addEventListener('click', clearAllRemarks);
remarkElements.exportRemarksBtn.addEventListener('click', exportRemarks);

// Click outside modal to close
remarkElements.modal.addEventListener('click', (e) => {
    if (e.target === remarkElements.modal) {
        closeRemarkModal();
    }
});

remarkElements.adminModal.addEventListener('click', (e) => {
    if (e.target === remarkElements.adminModal) {
        closeAdminPanel();
    }
});

// Keyboard shortcut for admin mode (Ctrl+Alt+A)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        toggleAdminMode();
    }
});

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Aviation Tech Quiz initialized');
    console.log(`Question bank loaded: ${questionDatabase.questions.length} questions`);

    // Register service worker for PWA support
    registerServiceWorker();
});

// ========================================
// PWA Service Worker Registration
// ========================================

let updateAvailable = false;
let deferredInstallPrompt = null;

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('[PWA] Service Worker registered successfully:', registration.scope);

                // Check for updates on page load
                registration.update();

                // Listen for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New service worker available
                            updateAvailable = true;
                            showUpdateNotification(registration);
                        }
                    });
                });

                // Check for updates periodically (every 60 seconds when app is open)
                setInterval(() => {
                    if (navigator.onLine) {
                        registration.update();
                    }
                }, 60000);
            })
            .catch((error) => {
                console.log('[PWA] Service Worker registration failed:', error);
            });

        // Listen for controller change (when new SW takes over)
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (updateAvailable) {
                console.log('[PWA] New version activated, reloading...');
                window.location.reload();
            }
        });
    } else {
        console.log('[PWA] Service Workers not supported');
    }
}

function showUpdateNotification(registration) {
    // Create update notification UI
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #4263eb, #7c3aed);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 16px;
        font-family: inherit;
        animation: slideUp 0.3s ease-out;
    `;

    notification.innerHTML = `
        <div style="flex: 1;">
            <div style="font-weight: 700; margin-bottom: 4px;">Update Available!</div>
            <div style="font-size: 0.875rem; opacity: 0.9;">A new version is ready. Click to update.</div>
        </div>
        <button id="update-btn" style="
            background: white;
            color: #4263eb;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
        ">Update Now</button>
        <button id="dismiss-update-btn" style="
            background: transparent;
            color: white;
            border: 2px solid rgba(255,255,255,0.3);
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-family: inherit;
        ">Later</button>
    `;

    document.body.appendChild(notification);

    // Handle update button click
    document.getElementById('update-btn').addEventListener('click', () => {
        // Tell the service worker to skip waiting
        if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
    });

    // Handle dismiss button
    document.getElementById('dismiss-update-btn').addEventListener('click', () => {
        notification.remove();
    });
}

// Handle PWA install prompt
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing
    event.preventDefault();

    // Store the event for later use
    deferredInstallPrompt = event;

    console.log('[PWA] Install prompt available');

    // Optionally show a custom install button
    showInstallButton();
});

function showInstallButton() {
    // Create install button (only show once)
    if (document.getElementById('install-app-btn')) return;

    const installBtn = document.createElement('button');
    installBtn.id = 'install-app-btn';
    installBtn.innerHTML = '📱 Install App';
    installBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4263eb, #7c3aed);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        font-family: inherit;
        box-shadow: 0 4px 16px rgba(66, 99, 235, 0.4);
        z-index: 9999;
        font-size: 0.875rem;
        transition: all 0.25s ease;
    `;

    installBtn.addEventListener('mouseover', () => {
        installBtn.style.transform = 'translateY(-2px)';
        installBtn.style.boxShadow = '0 6px 20px rgba(66, 99, 235, 0.5)';
    });

    installBtn.addEventListener('mouseout', () => {
        installBtn.style.transform = 'translateY(0)';
        installBtn.style.boxShadow = '0 4px 16px rgba(66, 99, 235, 0.4)';
    });

    installBtn.addEventListener('click', async () => {
        if (!deferredInstallPrompt) return;

        // Show the install prompt
        deferredInstallPrompt.prompt();

        // Wait for the user's response
        const { outcome } = await deferredInstallPrompt.userChoice;

        console.log(`[PWA] Install prompt outcome: ${outcome}`);

        // Clear the deferred prompt
        deferredInstallPrompt = null;

        // Remove the install button
        installBtn.remove();
    });

    document.body.appendChild(installBtn);
}

// Log when app is installed
window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed successfully');
    deferredInstallPrompt = null;

    // Remove install button if present
    const installBtn = document.getElementById('install-app-btn');
    if (installBtn) installBtn.remove();
});

// Add CSS animation for update notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
`;
document.head.appendChild(style);
