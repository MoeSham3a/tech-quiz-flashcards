# ✈️ Aviation Tech Quiz

A comprehensive Progressive Web App (PWA) for aviation technical knowledge assessment, featuring OMA, OMC, and FCOM questions with both study and timed exam modes.

![Aviation Quiz](https://img.shields.io/badge/PWA-Enabled-blue)
![Offline Support](https://img.shields.io/badge/Offline-Ready-green)
![Mobile Friendly](https://img.shields.io/badge/Mobile-Optimized-orange)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [PWA Features](#pwa-features)
- [Responsive Design](#responsive-design)
- [Development](#development)
- [Question Database](#question-database)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **📚 Study Mode**: Review all available questions without time constraints
- **⏱️ Exam Mode**: Two-section timed examination (20 min Closed Book + 40 min Open Book)
- **🎯 Smart Filtering**: Filter questions by Book Type (Closed/Open Book) and Manual (OMA, OMC, FCOM)
- **📊 Real-time Scoring**: Instant feedback and score tracking
- **🔄 Answer Review**: Modify answers within active exam sections
- **📝 Question Metadata**: Progressive reveal of manual, topic, and reference after answering

### Advanced Features
- **🚩 Remark System**: Report issues with questions (phrasing, references, answers)
- **👮 Admin Panel**: Manage user feedback (access via `Ctrl+Alt+A`)
- **💾 Local Storage**: Remarks persist across sessions
- **📱 PWA Support**: Install as native app, works offline
- **🔄 Auto-Update**: Checks for updates on launch when online
- **🎨 Modern UI**: Sleek dark theme with smooth animations

### Exam Mode Specifics
- **Section 1**: 20 Closed Book questions, 20-minute timer
- **Section 2**: 20 Open Book questions, 40-minute timer
- **Visual Timer**: Color-coded countdown (green → yellow → red)
- **Section Transitions**: Summary screen between sections
- **Early Submission**: Submit anytime before timer expires
- **Auto-Submit**: Automatic submission when time runs out

## 🚀 Demo

### Running Locally

```bash
# Navigate to project directory
cd Tech_Quiz_Flashcards

# Start local server (Python)
python -m http.server 8080

# Or using Node.js
npx http-server -p 8080

# Or using PHP
php -S localhost:8080
```

Open your browser and navigate to:
```
http://localhost:8080
```

### Installing as PWA

1. Open the app in Chrome/Edge
2. Click the **"📱 Install App"** button (top-right)
3. Confirm installation
4. App now available on desktop/home screen

## 📥 Installation

### Prerequisites
- Modern web browser (Chrome, Edge, Firefox, Safari)
- Local web server (for PWA features)
- No additional dependencies required

### Setup

1. **Clone/Download** the repository
   ```bash
   git clone <repository-url>
   cd Tech_Quiz_Flashcards
   ```

2. **Start a local server** (required for service worker)
   ```bash
   python -m http.server 8080
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

4. **Install as PWA** (optional)
   - Click "Install App" button
   - Or use browser's install prompt (⋮ → Install App)

## 📖 Usage

### Study Mode
1. Select filters (optional)
2. Click **"📚 Study Mode"**
3. Answer questions at your own pace
4. Navigate freely between questions
5. View results and review answers

### Exam Mode
1. Select filters (optional)
2. Click **"⏱️ Exam Mode"**
3. **Section 1** (20 min): Answer 20 Closed Book questions
4. Review/modify answers within section
5. Submit or wait for timer
6. View Section 1 summary
7. **Section 2** (40 min): Answer 20 Open Book questions
8. Submit when ready
9. View combined results (40 questions total)

### Admin Panel
1. Press `Ctrl+Alt+A` to reveal admin button
2. Click **🔑** button
3. View all pending remarks
4. Clear individual or all remarks
5. Export remarks as JSON

### Reporting Issues
1. Click **"🚩 Report Issue"** on any question
2. Select issue category
3. Enter detailed suggestion
4. Submit remark
5. Remarks persist locally until cleared by admin

## 📁 Project Structure

```
Tech_Quiz_Flashcards/
├── index.html              # Main HTML structure
├── style.css               # Complete styling with responsive design
├── app.js                  # Application logic & PWA registration
├── questions.js            # Question database
├── manifest.json           # PWA manifest
├── service-worker.js       # Service worker for offline support
├── icons/                  # PWA icons directory
│   └── icon-template.html  # SVG icon template
└── README.md              # This file
```

### Key Files

- **index.html**: Application shell with all screens (home, quiz, results, modals)
- **app.js**: Core logic (quiz flow, scoring, timer, PWA, remarks)
- **style.css**: Complete design system with 5 responsive breakpoints
- **questions.js**: Question database with metadata
- **service-worker.js**: Caching strategy and auto-update logic
- **manifest.json**: PWA configuration and shortcuts

## 🛠️ Technologies

### Core Technologies
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks, pure ES6+

### PWA Technologies
- **Service Workers**: Offline support and caching
- **Web App Manifest**: Installation metadata
- **Cache API**: Asset caching for offline use
- **localStorage**: Remark persistence

### Features Used
- CSS Custom Properties (variables)
- CSS Grid & Flexbox
- CSS Animations & Transitions
- Intersection Observer API
- Service Worker API
- beforeinstallprompt event

## 📱 PWA Features

### Offline Support
- All resources cached on first visit
- Questions accessible without internet
- Remarks saved locally
- Automatic cache updates when online

### Installation
- Install on desktop (Windows, macOS, Linux)
- Add to home screen (iOS, Android)
- Standalone window mode
- Custom app icon and splash screen

### Auto-Update System
```javascript
// Checks for updates on every app launch
// Version: CACHE_VERSION in service-worker.js
1. User opens app
2. Check if online
3. Compare versions
4. If update available:
   - Clear old cache
   - Download new files
   - Show update notification
   - User clicks "Update Now"
   - App reloads with new version
```

### Shortcuts
- **Exam Mode**: Direct link to start exam
- **Study Mode**: Direct link to study all questions

## 📐 Responsive Design

### Breakpoints
- **1024px**: Tablet Landscape
- **768px**: Tablet Portrait
- **640px**: Mobile Landscape
- **480px**: Mobile Portrait
- **Landscape Mode**: Height-based optimization

### Mobile Optimizations
- **Touch Targets**: Minimum 48px (Apple/Google guidelines)
- **Touch Feedback**: Active states instead of hover
- **Full-Width Buttons**: Easier tapping on mobile
- **Optimized Typography**: Readable font sizes
- **Adaptive Layouts**: Stack elements vertically

### Tablet Optimizations
- **2-Column Grids**: Where appropriate
- **Flexible Spacing**: Adapts to screen size
- **Larger Touch Targets**: Easy interaction

## 💻 Development

### Local Development
```bash
# Start development server
python -m http.server 8080

# Open browser
# Navigate to http://localhost:8080
```

### Updating Questions
Edit `questions.js`:
```javascript
const questionDatabase = {
    database_info: { ... },
    questions: [
        {
            id: "CB_OMA_001",
            section: "Closed Book",
            manual: "OMA",
            reference: "OMA 8.1.7.2",
            topic: "Fuel / Refueling",
            question: "Your question here?",
            options: ["a. Option 1", "b. Option 2", ...],
            correct_answer: 0,  // Index of correct answer
            correct_answer_indication: "Option A",
            source_notes: "Additional context",
            citation: "[1, 2]"
        }
    ]
};
```

### Updating Cache Version
To force users to update, modify `service-worker.js`:
```javascript
// Change this version number
const CACHE_VERSION = 'v1.0.1';  // Increment version
```

Next time users open the app (when online), they'll see an update notification.

### Admin Access
- **Keyboard Shortcut**: `Ctrl+Alt+A`
- **Admin Button**: Appears in bottom-right
- **Functions**: View remarks, clear remarks, export JSON

## 📚 Question Database

### Database Structure
```javascript
{
    database_info: {
        title: "Master Tech Quiz QUESTIONS",
        date: "06/NOV/2025",
        total_entries_parsed: 1234,
        disclaimer: "Source attribution"
    },
    questions: [ ... ]
}
```

### Question Object
```javascript
{
    id: "UNIQUE_ID",           // e.g., "CB_OMA_001"
    section: "Closed Book",     // or "Open Book"
    manual: "OMA",              // OMA, OMC, FCOM
    reference: "OMA 8.1.7.2",   // Manual reference
    topic: "Fuel / Refueling",  // Category
    question: "Question text?",
    options: ["a. ...", "b. ...", "c. ...", "d. ..."],
    correct_answer: 0,          // Index (0-3)
    correct_answer_indication: "Option A",
    source_notes: "Context",
    citation: "[1, 2]"
}
```

### Filters Available
- **Book Type**: Closed Book, Open Book
- **Manual**: OMA, OMC, FCOM

## 🤝 Contributing

### Adding Questions
1. Edit `questions.js`
2. Follow the question object structure
3. Ensure unique IDs
4. Test in both exam and study modes

### Reporting Bugs
Use the built-in remark system:
1. Navigate to problematic question
2. Click "🚩 Report Issue"
3. Describe the bug
4. Submit

Or create an issue in the repository.

### Feature Requests
Submit feedback through:
- Remark system (in-app)
- GitHub Issues
- Direct contribution via Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Question database sourced from Master Tech Quiz
- Icons and design inspired by modern aviation interfaces
- Built with modern web standards and best practices

## 📞 Support

For issues or questions:
1. Check existing remarks in admin panel
2. Submit a remark through the app
3. Create a GitHub issue
4. Contact the development team

---

**Made with ✈️ for aviation professionals**

**Version**: 1.0.0  
**Last Updated**: December 2025  
**PWA Ready**: ✅  
**Offline Support**: ✅  
**Mobile Optimized**: ✅
