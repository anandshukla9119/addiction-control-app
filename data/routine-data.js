// ============================================
// 📅 60-DAY COMPLETE ROUTINE DATA
// Monday-Friday: Office Schedule
// Saturday-Sunday: Weekend Schedule
// ============================================

// ===== WEEKLY FOOD MENU =====
const WEEKLY_FOOD_MENU = {
    // Din wise khaana - 3 din chawal, 4 din roti/puri
    schedule: {
        monday: { lunch: "Roti + Seasonal Sabzi (Aloo)", dinner: "Roti + Dal + Sabzi" },
        tuesday: { lunch: "Chawal + Kadhi/Dal + Sabzi", dinner: "Roti + Sabzi" },
        wednesday: { lunch: "Roti + Seasonal Sabzi (Aloo)", dinner: "Chawal + Dal + Sabzi" },
        thursday: { lunch: "Chawal + Rajma/Chole", dinner: "Roti + Seasonal Sabzi" },
        friday: { lunch: "Roti + Paneer/Sabzi", dinner: "Roti + Dal + Aloo Sabzi" },
        saturday: { lunch: "Puri + Aloo Sabzi + Halwa", dinner: "Chawal + Dal + Sabzi" },
        sunday: { lunch: "Roti/Puri + Special Sabzi", dinner: "Light - Khichdi/Daliya" }
    },
    vegetables: [
        "Aloo Gobhi", "Aloo Matar", "Aloo Bhindi", "Aloo Baingan",
        "Aloo Palak", "Aloo Tamatar", "Aloo Shimla Mirch",
        "Kaddu + Aloo", "Gajar Matar", "Bhindi Masala",
        "Mix Veg (Seasonal)", "Paneer Matar", "Parwal"
    ],
    note: "Sabzi me Aloo + Seasonal vegetables use karo. Ghar ka fresh khaana khao!"
};

const routineData = {

    // ============================================
    // WEEKDAY ROUTINE (Monday - Friday)
    // Office Hours: 9 AM - 8 PM
    // ============================================
    weekday: {
        schedule: [
            {
                time: "05:30",
                timeEnd: "06:00",
                task: "🙏 Puja Path",
                description: "Subah ki puja, meditation, gratitude",
                category: "spiritual",
                mandatory: true,
                tips: [
                    "Phone touch mat kar pehle",
                    "5 min meditation karo",
                    "3 cheezein likho jinke liye grateful ho"
                ]
            },
            {
                time: "06:00",
                timeEnd: "06:30",
                task: "🏃 Morning Exercise",
                description: "Light exercise ya walk",
                category: "health",
                mandatory: false,
                tips: [
                    "Stretching se shuru karo",
                    "10-15 min walk bhi chalega",
                    "Deep breathing karo"
                ]
            },
            {
                time: "06:30",
                timeEnd: "07:00",
                task: "🚿 Fresh Ho Jao",
                description: "Nahao, taiyar ho",
                category: "personal",
                mandatory: true,
                tips: [
                    "Cold shower try karo",
                    "Nashta healthy rakhna"
                ]
            },
            {
                time: "07:00",
                timeEnd: "07:30",
                task: "🍳 Healthy Breakfast",
                description: "Nutritious nashta khao",
                category: "health",
                mandatory: true,
                diet: [
                    "Eggs + Toast",
                    "Oats with fruits",
                    "Poha/Upma",
                    "Smoothie + Dry fruits"
                ],
                avoid: [
                    "Chai ke saath cigarette ❌",
                    "Heavy fried food ❌",
                    "Skip mat karna ❌"
                ]
            },
            {
                time: "07:30",
                timeEnd: "08:00",
                task: "📱 Quick Review",
                description: "Aaj ka plan dekho, motivational content",
                category: "planning",
                mandatory: false,
                tips: [
                    "App kholo, aaj ka routine check karo",
                    "5 min motivational video/podcast",
                    "Goals yaad karo"
                ]
            },
            {
                time: "08:00",
                timeEnd: "08:30",
                task: "🔥 STREAK TIME - CRITICAL!",
                description: "App mein streak click karo - MISS MAT KARNA!",
                category: "streak",
                mandatory: true,
                critical: true,
                warning: "Is window mein streak click nahi ki to streak RESET!"
            },
            {
                time: "08:30",
                timeEnd: "09:00",
                task: "🚗 Office Travel",
                description: "Office jao",
                category: "travel",
                mandatory: true,
                tips: [
                    "Podcast suno travel mein",
                    "Music se mood fresh karo",
                    "Cigarette mat pina raste mein!"
                ]
            },
            {
                time: "09:00",
                timeEnd: "12:00",
                task: "💼 Office Work - Morning Session",
                description: "Kaam pe focus karo, distractions band",
                category: "work",
                mandatory: true,
                tips: [
                    "Phone silent pe rakh",
                    "Pani pite raho",
                    "Craving aaye to 5 deep breaths lo"
                ],
                cravingBuster: [
                    "Glass bhar paani pio",
                    "5 min walk lo office mein",
                    "Chewing gum khao",
                    "Deep breathing - 4-7-8 technique"
                ]
            },
            {
                time: "12:00",
                timeEnd: "12:30",
                task: "☕ Short Break",
                description: "Chhota break - chai/coffee",
                category: "break",
                mandatory: false,
                warning: "Chai ke saath cigarette = RELAPSE! Mat karna!",
                alternatives: [
                    "Green tea try karo",
                    "Nimbu paani",
                    "Buttermilk"
                ]
            },
            {
                time: "12:30",
                timeEnd: "14:00",
                task: "💼 Office Work - Pre-Lunch",
                description: "Kaam continue karo",
                category: "work",
                mandatory: true
            },
            {
                time: "14:00",
                timeEnd: "15:00",
                task: "🥗 LUNCH TIME",
                description: "Healthy lunch + short rest",
                category: "health",
                mandatory: true,
                diet: [
                    "Dal + Roti + Sabzi",
                    "Rice (limited) + Dal + Salad",
                    "Rajma/Chole + Rice",
                    "Paneer dish + Roti"
                ],
                tips: [
                    "Slowly khao, phone dekhe bina",
                    "20 min baad 10 min walk lo",
                    "Paani zaroor pio"
                ],
                avoid: [
                    "Junk food ❌",
                    "Overeating ❌",
                    "Lunch skip karna ❌",
                    "Cigarette after lunch ❌"
                ],
                cravingBuster: [
                    "Lunch ke baad sabse zyada craving aati hai",
                    "Immediately 10 min walk lo",
                    "Mint khao",
                    "Deep breathing karo"
                ]
            },
            {
                time: "15:00",
                timeEnd: "17:00",
                task: "💼 Office Work - Afternoon Session",
                description: "Post-lunch productivity",
                category: "work",
                mandatory: true,
                tips: [
                    "Neend aaye to 5 min walk lo",
                    "Pani pio",
                    "Important tasks abhi complete karo"
                ]
            },
            {
                time: "17:00",
                timeEnd: "17:15",
                task: "☕ Evening Tea Break",
                description: "Quick chai/snack break",
                category: "break",
                mandatory: false,
                warning: "CHAI + CIGARETTE combo = DANGER!",
                alternatives: [
                    "Green tea",
                    "Fruit khao",
                    "Nuts"
                ]
            },
            {
                time: "17:15",
                timeEnd: "20:00",
                task: "💼 Office Work - Final Session",
                description: "Kaam complete karo, day wrap up",
                category: "work",
                mandatory: true,
                tips: [
                    "Tomorrow ka list banao",
                    "Pending kaam finish karo",
                    "Clean desk policy"
                ]
            },
            {
                time: "20:00",
                timeEnd: "20:30",
                task: "🏠 Office Se Ghar",
                description: "Travel back home",
                category: "travel",
                mandatory: true,
                tips: [
                    "Relaxing music suno",
                    "Raste mein cigarette mat khareedna!",
                    "Direct ghar jao, adda mat lagao"
                ]
            },
            {
                time: "20:30",
                timeEnd: "21:00",
                task: "🍽️ Dinner",
                description: "Light dinner",
                category: "health",
                mandatory: true,
                diet: [
                    "Light khana - roti + sabzi",
                    "Soup + Salad",
                    "Khichdi",
                    "Dahi + Paratha (light)"
                ],
                tips: [
                    "Heavy mat khao raat ko",
                    "Dinner ke 2 ghante baad sona"
                ]
            },
            {
                time: "21:00",
                timeEnd: "22:00",
                task: "📚 LEARNING TIME - Python/GenAI",
                description: "Daily 1 ghanta padhai",
                category: "learning",
                mandatory: true,
                weekdayDuration: "1 hour",
                tips: [
                    "Phone silent + Do Not Disturb",
                    "Notes banao",
                    "Practical karo, sirf theory nahi"
                ]
            },
            {
                time: "22:00",
                timeEnd: "23:00",
                task: "✅ NIGHT CHECKLIST",
                description: "Aaj ka review + checklist complete karo",
                category: "checklist",
                mandatory: true,
                critical: true,
                items: [
                    "Aaj cigarette nahi piya?",
                    "Aaj satta nahi khela?",
                    "Puja ki?",
                    "Office time pe gaya?",
                    "Healthy khana khaya?",
                    "1 ghanta padha?",
                    "Water intake theek tha?",
                    "Streak click kiya tha?",
                    "Routine follow kiya?"
                ]
            },
            {
                time: "23:00",
                timeEnd: "05:30",
                task: "🛏️ SLEEP",
                description: "6-7 ghante ki neend zaruri hai",
                category: "rest",
                mandatory: true,
                tips: [
                    "Phone band ya silent",
                    "No screen 30 min pehle",
                    "Room dark rakhna",
                    "Kal ke liye ready"
                ]
            }
        ]
    },

    // ============================================
    // WEEKEND ROUTINE (Saturday)
    // Learning: 2-3 Hours + Movies (Fri-Sat only)
    // ============================================
    saturday: {
        schedule: [
            {
                time: "10:00",
                timeEnd: "10:30",
                task: "🙏 Puja Path + Wake Up",
                description: "Weekend hai, aaram se utho!",
                category: "spiritual",
                mandatory: true
            },
            {
                time: "10:30",
                timeEnd: "11:30",
                task: "🏃 Extended Exercise",
                description: "Weekend = longer workout",
                category: "health",
                mandatory: false,
                tips: [
                    "30-45 min exercise",
                    "Running/jogging",
                    "Yoga bhi try karo"
                ]
            },
            {
                time: "11:30",
                timeEnd: "12:00",
                task: "🍳 Heavy Breakfast",
                description: "Paratha/Poori allowed!",
                category: "health",
                mandatory: true
            },
            {
                time: "12:00",
                timeEnd: "12:30",
                task: "🔥 STREAK TIME - CRITICAL!",
                description: "Weekend pe bhi streak zaruri!",
                category: "streak",
                mandatory: true,
                critical: true
            },
            {
                time: "12:30",
                timeEnd: "13:00",
                task: "🧹 Personal Work / House Chores",
                description: "Ghar ka kaam, cleaning, errands",
                category: "personal",
                mandatory: false
            },
            {
                time: "10:00",
                timeEnd: "13:00",
                task: "📚 EXTENDED LEARNING - Python/GenAI",
                description: "Weekend = 2-3 ghante padhai",
                category: "learning",
                mandatory: true,
                weekendDuration: "3 hours",
                tips: [
                    "Project work karo",
                    "Week ka revision",
                    "Practical exercises",
                    "Doubts clear karo"
                ]
            },
            {
                time: "13:00",
                timeEnd: "14:00",
                task: "🥗 Lunch",
                description: "Healthy lunch",
                category: "health",
                mandatory: true
            },
            {
                time: "14:00",
                timeEnd: "15:00",
                task: "😴 Power Nap / Rest",
                description: "Thoda rest lo",
                category: "rest",
                mandatory: false
            },
            {
                time: "15:00",
                timeEnd: "17:00",
                task: "🎯 Personal Projects / Hobbies",
                description: "Apne kaam, side projects",
                category: "personal",
                mandatory: false
            },
            {
                time: "17:00",
                timeEnd: "19:00",
                task: "👨‍👩‍👧 Family Time / Social",
                description: "Family ke saath time bitao",
                category: "social",
                mandatory: false
            },
            {
                time: "19:00",
                timeEnd: "20:00",
                task: "🍽️ Dinner",
                description: "Family dinner",
                category: "health",
                mandatory: true
            },
            {
                time: "20:00",
                timeEnd: "22:30",
                task: "🎬 MOVIE TIME (Saturday Only!)",
                description: "Recommended Sci-Fi movie dekho",
                category: "entertainment",
                mandatory: false,
                note: "Sirf Friday aur Saturday ko movie allowed!",
                movieDay: true
            },
            {
                time: "22:30",
                timeEnd: "23:00",
                task: "✅ NIGHT CHECKLIST",
                description: "Checklist complete karo",
                category: "checklist",
                mandatory: true,
                critical: true
            },
            {
                time: "23:00",
                timeEnd: "06:00",
                task: "🛏️ SLEEP",
                description: "Weekend pe thoda extra neend",
                category: "rest",
                mandatory: true
            }
        ],
        movieAllowed: true
    },

    // ============================================
    // SUNDAY ROUTINE
    // Back to schedule prep + NO MOVIES
    // ============================================
    sunday: {
        schedule: [
            {
                time: "10:00",
                timeEnd: "10:30",
                task: "🙏 Puja Path + Wake Up",
                description: "Sunday special puja",
                category: "spiritual",
                mandatory: true
            },
            {
                time: "10:30",
                timeEnd: "11:00",
                task: "🏃 Morning Exercise",
                description: "Exercise karo",
                category: "health",
                mandatory: false
            },
            {
                time: "11:00",
                timeEnd: "11:30",
                task: "🍳 Healthy Breakfast",
                description: "Nashta",
                category: "health",
                mandatory: true
            },
            {
                time: "11:30",
                timeEnd: "12:00",
                task: "🔥 STREAK TIME - CRITICAL!",
                description: "Sunday pe bhi streak!",
                category: "streak",
                mandatory: true,
                critical: true
            },
            {
                time: "12:00",
                timeEnd: "12:30",
                task: "📋 Week Planning",
                description: "Agle hafte ki planning karo",
                category: "planning",
                mandatory: true,
                tips: [
                    "Kal se kya karna hai",
                    "Important tasks list karo",
                    "Goals review karo"
                ]
            },
            {
                time: "09:30",
                timeEnd: "12:30",
                task: "📚 LEARNING - Python/GenAI (3 Hours)",
                description: "Sunday learning session",
                category: "learning",
                mandatory: true,
                weekendDuration: "3 hours"
            },
            {
                time: "12:30",
                timeEnd: "13:30",
                task: "🥗 Lunch",
                description: "Healthy lunch",
                category: "health",
                mandatory: true
            },
            {
                time: "13:30",
                timeEnd: "15:00",
                task: "😴 Rest / Free Time",
                description: "Relaxation (NO MOVIES!)",
                category: "rest",
                mandatory: false,
                warning: "⚠️ SUNDAY KO MOVIE NAHI! Back to schedule!"
            },
            {
                time: "15:00",
                timeEnd: "17:00",
                task: "📖 Week Revision + Practice",
                description: "Jo padha uska revision",
                category: "learning",
                mandatory: true
            },
            {
                time: "17:00",
                timeEnd: "19:00",
                task: "👨‍👩‍👧 Family / Personal Time",
                description: "Family ke saath",
                category: "social",
                mandatory: false
            },
            {
                time: "19:00",
                timeEnd: "20:00",
                task: "🍽️ Early Dinner",
                description: "Jaldi dinner karo",
                category: "health",
                mandatory: true
            },
            {
                time: "20:00",
                timeEnd: "21:00",
                task: "📋 Tomorrow Prep",
                description: "Kal office ke liye prep",
                category: "planning",
                mandatory: true,
                tips: [
                    "Kapde ready karo",
                    "Bag pack karo",
                    "Morning alarm set karo",
                    "Early sona hai!"
                ]
            },
            {
                time: "21:00",
                timeEnd: "22:00",
                task: "📚 Light Reading / Relaxation",
                description: "Screen-free relaxation",
                category: "rest",
                mandatory: false,
                warning: "Phone kam use karo raat ko!"
            },
            {
                time: "22:00",
                timeEnd: "22:30",
                task: "✅ NIGHT CHECKLIST",
                description: "Week end checklist",
                category: "checklist",
                mandatory: true,
                critical: true
            },
            {
                time: "22:30",
                timeEnd: "05:30",
                task: "🛏️ EARLY SLEEP",
                description: "Kal office hai - jaldi so!",
                category: "rest",
                mandatory: true,
                warning: "Monday fresh rehna hai - 7 ghante neend lo!"
            }
        ],
        movieAllowed: false,
        backToScheduleDay: true
    },

    // ============================================
    // FRIDAY ROUTINE (Special - Movie Day)
    // ============================================
    friday: {
        // Same as weekday but with movie in evening
        movieAllowed: true,
        note: "Friday shaam ko movie dekh sakte ho!"
    },

    // ============================================
    // DAY-SPECIFIC DATA (60 days)
    // ============================================
    days: {
        // Day 1-7: Bootcamp Mode
        1: { bootcamp: true, focus: "Survival Mode", tips: "Pehla din sabse mushkil" },
        2: { bootcamp: true, focus: "Building Habit", tips: "Kal se better" },
        3: { bootcamp: true, focus: "Craving Management", tips: "Cravings aayengi, ready reh" },
        4: { bootcamp: true, focus: "Routine Setting", tips: "Routine mein dhalna seekh" },
        5: { bootcamp: true, focus: "Midweek Push", tips: "Hafte ke beech mein himmat rakh" },
        6: { bootcamp: true, focus: "Weekend Challenge", tips: "Weekend sabse dangerous" },
        7: { bootcamp: true, focus: "First Week Complete", tips: "EK HAFTA! Bahut bada achievement!" },

        // Day 8-14: Week 2
        8: { bootcamp: false, focus: "New Week Energy", tips: "Fresh start" },
        // ... continue for all 60 days

        // Key milestones
        15: { milestone: true, achievement: "Two Week Warrior" },
        30: { milestone: true, achievement: "Monthly Master" },
        45: { milestone: true, achievement: "Python Complete" },
        60: { milestone: true, achievement: "Transformation Complete" }
    },

    // ============================================
    // HELPER FUNCTIONS
    // ============================================

    // Get routine for specific day
    getRoutine: function (dayNumber, dayOfWeek) {
        // 0 = Sunday, 6 = Saturday, 5 = Friday
        if (dayOfWeek === 0) return this.sunday;
        if (dayOfWeek === 6) return this.saturday;
        if (dayOfWeek === 5) {
            // Friday - weekday but movie allowed
            return { ...this.weekday, movieAllowed: true };
        }
        return this.weekday;
    },

    // Get day-specific data
    getDayData: function (dayNumber) {
        return this.days[dayNumber] || {
            bootcamp: dayNumber <= 7,
            focus: "Stay Strong",
            tips: "Ek din ek time"
        };
    },

    // Check if movie allowed today
    isMovieDay: function (dayOfWeek) {
        // Friday (5) and Saturday (6) only
        return dayOfWeek === 5 || dayOfWeek === 6;
    },

    // Get current task based on time
    getCurrentTask: function (currentTime, dayOfWeek) {
        const routine = this.getRoutine(1, dayOfWeek);
        const schedule = routine.schedule;

        for (let item of schedule) {
            const start = item.time.replace(':', '');
            const end = item.timeEnd.replace(':', '');
            const now = currentTime.replace(':', '');

            if (now >= start && now < end) {
                return item;
            }
        }

        return null;
    },

    // Check if in streak window
    isStreakWindow: function (currentTime) {
        const now = currentTime.replace(':', '');
        return now >= '0800' && now <= '0830';
    },

    // Check if in checklist window
    isChecklistWindow: function (currentTime) {
        const now = currentTime.replace(':', '');
        return now >= '2200' && now <= '2300';
    }
};

// Export
if (typeof module !== 'undefined') {
    module.exports = routineData;
}