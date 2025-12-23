// ============================================
// PROTOCOL: REBOOT - CORE JAVASCRIPT
// 120-Day Addiction Control System
// ============================================

// ==========================================
// CONFIGURATION
// ==========================================

const CONFIG = {
    APP_NAME: "PROTOCOL: REBOOT",
    VERSION: "2.0.0",

    // Time Settings
    STREAK_START_HOUR: 8,
    STREAK_START_MIN: 0,
    STREAK_END_HOUR: 8,
    STREAK_END_MIN: 30,

    CHECKLIST_START_HOUR: 22,
    CHECKLIST_END_HOUR: 23,

    // Program Duration
    TOTAL_DAYS: 120,
    PYTHON_DAYS: 45,
    GENAI_DAYS: 75,  // Day 46-120
    BOOTCAMP_DAYS: 7,

    // Money Calculations
    CIGARETTE_COST_PER_DAY: 150,
    SATTA_POTENTIAL_LOSS: 500
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

function formatTime(date) {
    const d = new Date(date);
    const hours = String(d.getHours()).padStart(2, '0');
    const mins = String(d.getMinutes()).padStart(2, '0');
    return `${hours}:${mins}`;
}

function getDayName(dayOfWeek) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayOfWeek];
}

function isWeekend() {
    const day = new Date().getDay();
    return day === 0 || day === 6;
}

function isMovieDay() {
    const day = new Date().getDay();
    return day === 5 || day === 6; // Friday or Saturday
}

// ==========================================
// AUTHENTICATION
// ==========================================

function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'index.html';
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

function getAppData() {
    return JSON.parse(localStorage.getItem('appData'));
}

function saveAppData(data) {
    localStorage.setItem('appData', JSON.stringify(data));
}

// ==========================================
// NOTIFICATIONS (Toast)
// ==========================================

function showNotification(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) {
        console.log('[NOTIFICATION]', type.toUpperCase(), message);
        return;
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = '[*]';
    if (type === 'success') icon = '[OK]';
    else if (type === 'error') icon = '[X]';
    else if (type === 'warning') icon = '[!]';

    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Show animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Alias for backward compatibility
function showToast(message, type) {
    showNotification(message, type);
}

// ==========================================
// STREAK SYSTEM
// ==========================================

function isStreakWindowOpen() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const currentMins = hour * 60 + min;

    const startMins = CONFIG.STREAK_START_HOUR * 60 + CONFIG.STREAK_START_MIN;
    const endMins = CONFIG.STREAK_END_HOUR * 60 + CONFIG.STREAK_END_MIN;

    return currentMins >= startMins && currentMins <= endMins;
}

function hasClaimedStreakToday() {
    const appData = getAppData();
    if (!appData || !appData.lastStreakDate) return false;

    const today = new Date().toDateString();
    const lastStreak = new Date(appData.lastStreakDate).toDateString();

    return today === lastStreak;
}

function claimStreak() {
    if (!isStreakWindowOpen()) {
        showNotification('Streak window is closed!', 'error');
        return false;
    }

    if (hasClaimedStreakToday()) {
        showNotification('Already claimed today!', 'warning');
        return false;
    }

    const appData = getAppData();
    appData.streak++;
    appData.lastStreakDate = new Date().toISOString();

    if (!appData.bestStreak || appData.streak > appData.bestStreak) {
        appData.bestStreak = appData.streak;
    }

    saveAppData(appData);
    showNotification('STREAK EXTENDED! Stay strong!', 'success');
    return true;
}

// ==========================================
// CHECKLIST SYSTEM
// ==========================================

function isChecklistWindowOpen() {
    const hour = new Date().getHours();
    return hour >= CONFIG.CHECKLIST_START_HOUR && hour < CONFIG.CHECKLIST_END_HOUR;
}

function hasSubmittedChecklistToday() {
    const appData = getAppData();
    if (!appData || !appData.checklistHistory) return false;

    const today = new Date().toDateString();
    return appData.checklistHistory[today] !== undefined;
}

// ==========================================
// PROGRESS TRACKING
// ==========================================

function updateCurrentDay() {
    const appData = getAppData();
    if (!appData || !appData.startDate) return;

    const startDate = new Date(appData.startDate);
    const today = new Date();

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    appData.currentDay = Math.min(Math.max(1, diffDays), CONFIG.TOTAL_DAYS);
    saveAppData(appData);
}

function calculateMoneySaved() {
    const appData = getAppData();
    if (!appData) return { cigarettes: 0, satta: 0, total: 0 };

    const days = appData.currentDay || 1;
    const cigarettes = days * CONFIG.CIGARETTE_COST_PER_DAY;
    const satta = days * CONFIG.SATTA_POTENTIAL_LOSS;

    return {
        cigarettes: cigarettes,
        satta: satta,
        total: cigarettes + satta
    };
}

// ==========================================
// ADDICTION BREAK (PENALTY)
// ==========================================

function reportAddictionBreak() {
    const appData = getAppData();

    appData.streak = 0;
    appData.addictionBreaks = (appData.addictionBreaks || 0) + 1;
    appData.penaltyLevel = (appData.penaltyLevel || 0) + 1;
    appData.lastStreakDate = null;

    saveAppData(appData);

    return appData;
}

// ==========================================
// INITIALIZATION CHECK
// ==========================================

function initializeApp() {
    // Create appData if doesn't exist
    if (!localStorage.getItem('appData')) {
        const appData = {
            currentDay: 1,
            streak: 0,
            addictionBreaks: 0,
            penaltyLevel: 0,
            pythonProgress: 0,
            genaiProgress: 0,
            completedDays: [],
            startDate: new Date().toISOString(),
            lastStreakDate: null,
            testMode: false,
            bootcampMode: true,
            checklistHistory: {}
        };
        localStorage.setItem('appData', JSON.stringify(appData));
    }
}

// ==========================================
// BACKWARD COMPATIBILITY (Old function names)
// ==========================================

// For old code that uses AppAuth
const AppAuth = {
    isLoggedIn: function () {
        return localStorage.getItem('isLoggedIn') === 'true';
    },
    login: function (email, password) {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser && savedUser.email === email && savedUser.password === password) {
            localStorage.setItem('isLoggedIn', 'true');
            return true;
        }
        return false;
    },
    logout: function () {
        logout();
    }
};

// For old code that uses AppState
const AppState = {
    getData: function () {
        return getAppData();
    },
    saveData: function (data) {
        saveAppData(data);
    }
};

// ==========================================
// CONSOLE LOG (Debug)
// ==========================================

console.log('// PROTOCOL: REBOOT - v2.0.0');
console.log('// Addiction Control System Initialized');
console.log('// Stay Strong. Stay Disciplined.');
