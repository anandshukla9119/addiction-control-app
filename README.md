# 🎯 Protocol: addiction-control-app

> **60 Din Mein Poori Kaaya Palat** — A 120-Day Self-Improvement & Addiction Control Web Application

[![Made with HTML, CSS, JavaScript](https://img.shields.io/badge/Made%20with-HTML%2C%20CSS%2C%20JS-orange?style=for-the-badge)](/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](/)

---

## 📌 About

**Protocol: REBOOT** is a comprehensive, gamified self-improvement and addiction control web application designed to help users break bad habits (like smoking and gambling) through a structured 120-day transformation program. The app combines daily routines, habit tracking, streak monitoring, learning modules, and a penalty system to create accountability and motivation.

Built with a hacker/terminal-inspired dark theme, the app provides an immersive experience that makes the journey towards self-improvement engaging and rewarding.

---

## ✨ Key Features

### 🔥 Streak System
- **Daily Streak Check-In** — Mark your commitment every morning (08:00 - 08:30 window)
- **Best Streak Tracking** — Track your longest clean streak
- **Countdown Timer** — Live countdown to next check-in window
- **Visual Feedback** — Glowing animations when streak is active

### 📋 Night Checklist (22:00 - 23:00)
- **Addiction Tracking** — Track cigarette-free and satta-free days
- **Money Saved Calculator** — See how much money you've saved
- **Routine Performance** — Track daily activities like puja, exercise, healthy food
- **Learning Progress** — Log study time and minutes
- **Self-Reflection** — Daily journaling prompts
- **Daily Rating** — Rate your day from 1-10

### 📚 Learning Track (120 Days)
- **Python Mastery (Day 1-45)** — Complete Python programming course
  - Week 1: Python Basics
  - Week 2: Data Structures
  - Week 3: Control Flow + Functions
  - Week 4: OOP + Modules
  - Week 5-6: Advanced + Projects
- **GenAI Deep Dive (Day 46-120)** — Generative AI & LLM training
  - LangChain, OpenAI API, RAG
  - Vector Databases, Embeddings
  - AI Agents & Multi-Agent Systems
  - Production deployment & more

### 🗓️ Daily Routine Manager
- **Weekday Routine** — Optimized for office workers (9 AM - 8 PM)
- **Weekend Routine** — Flexible routine with extended study time
- **Anti-Craving Tips** — Practical tips to fight addiction urges
- **Diet Plan** — Daily meal suggestions for each day

### 📈 Progress Tracker
- **120-Day Calendar** — Visual grid showing completion status
- **Weekly Performance** — Week-by-week summary
- **Money Saved Stats** — Total savings from avoiding addiction
- **Learning Stats** — Total study time and completion percentage

### 🏆 Achievements System
- 9 unlockable badges from Day 1 to Day 120
- **FIRST STEP** → **SURVIVOR** → **FIGHTER** → **HABIT FORMED** → **MONTHLY MASTER** → **PYTHON WARRIOR** → **UNSTOPPABLE** → **ELITE** → **LEGEND**

### 🎬 Curated Entertainment
- **33 Approved Movies** — Life-changing Sci-Fi and Motivational films
- **Movies Only on Friday & Saturday** — Controlled entertainment access
- **Hindi Podcasts** — Daily inspiration sources
- **Knowledge Videos** — Educational content recommendations

### ⚡ 7-Day Bootcamp Mode
- Strict discipline mode for first 7 days
- Enhanced rules and focus areas
- Day-by-day survival tips

### 💀 Penalty System
- **Streak Reset** on addiction break
- **Penalty Level Tracking** — Accumulates with each break
- **Brutal Motivational Messages** — No-nonsense wake-up calls
- **Nuclear Alert** — Special warning at 5+ breaks

---

## 📁 Project Structure

```
addiction-control-app/
├── index.html          # Login page
├── signup.html         # Registration page
├── dashboard.html      # Main dashboard with stats & navigation
├── streak.html         # Daily streak check-in system
├── routine.html        # Daily routine manager
├── checklist.html      # Night checklist (22:00-23:00)
├── learning.html       # 120-day learning track
├── progress.html       # Progress tracker with calendar
├── bootcamp.html       # 7-day bootcamp mode
├── penalty.html        # Penalty screen for breaks
├── movies.html         # Curated movie & content list
├── css/
│   └── style.css       # Main stylesheet (dark hacker theme)
├── js/
│   └── script.js       # Core JavaScript functionality
├── data/
│   ├── routine-data.js # Routine configuration
│   └── brutal-messages.js # Penalty messages
├── images/
│   └── badges/         # Achievement badge images
└── python/             # Python learning resources
```

---

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **CSS3** — Custom dark hacker theme with CSS variables
- **JavaScript (Vanilla)** — No frameworks, pure JS
- **LocalStorage** — Client-side data persistence
- **Font Awesome** — Icons
- **Google Fonts** — JetBrains Mono & Inter fonts

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No server required — runs entirely in browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/protocol-reboot.git
   ```

2. **Navigate to project directory**
   ```bash
   cd protocol-reboot
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server like Live Server in VS Code

### First Time Setup
1. Click "Create Identity" to register
2. Enter your name, email, and password
3. Your 60-day journey begins!

---

## 🎨 Theme & Design

The app features a **hacker/terminal-inspired dark theme** with:
- **Primary Background:** Deep dark (#0a0a0f)
- **Accent Colors:** 
  - Green (#00ff41) — Success, streaks
  - Red (#ff003c) — Danger, penalties
  - Yellow (#fcee0a) — Warnings
  - Blue (#00d4ff) — Info, Python
  - Purple (#9d00ff) — GenAI, special
- **Typography:** JetBrains Mono (code) + Inter (UI)
- **Glitch Effects:** Animated text effects
- **Glowing Shadows:** Neon-style accents

---

## 📱 Responsive Design

- Desktop optimized (primary)
- Tablet compatible
- Mobile-friendly navigation

---

## 🔒 Data Storage

All data is stored locally in browser's LocalStorage:
- User credentials
- Current day progress
- Streak data
- Checklist history
- Learning progress
- Achievement unlocks
- Money saved calculations

**Note:** Data is device-specific. Clearing browser data will reset progress.

---

## 🗺️ Roadmap

- [ ] Cloud sync with backend
- [ ] Push notifications
- [ ] Mobile app (PWA)
- [ ] Community features
- [ ] Multi-language support
- [ ] Export progress reports

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by self-improvement communities
- Movie recommendations from IMDb top-rated lists
- Hindi podcast creators for motivation content
- Python learning curriculum inspired by various online resources

---

## Author

Made with ❤️ for everyone fighting to become a better version of themselves.

> *"Har din ek naya mauka hai apne aap ko saabit karne ka."*  
> *— Every day is a new chance to prove yourself.*

<p align="center">
  <strong>🔥 60 Din. Ek Naya Tu. 🔥</strong>
</p>
