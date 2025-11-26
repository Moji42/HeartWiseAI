# HeartWise AI - Mobile App

A React Native mobile application for HeartWise AI - your personal emotional intelligence and relationship coaching platform.

## 📱 Features

- **Dashboard** - Overview of emotional wellness journey with stats and quick actions
- **Mood Tracker** - Log daily moods with 5-level scale and notes
- **Journal** - Private encrypted journaling with AI-suggested prompts
- **AI Coach** - Chat with emotionally intelligent AI for relationship guidance
- **Authentication** - Secure login/signup (Supabase-ready)

## 🛠 Tech Stack

- **React Native CLI** (v0.82.1)
- **TypeScript**
- **React Navigation** (Tab + Stack navigators)
- **React Native Linear Gradient**
- **Lucide React Native** (icons)
- **React Native Async Storage**
- **React Native Reanimated**

## 📁 Project Structure

```
mobile/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Text.tsx
│   │       └── ...
│   ├── contexts/
│   │   ├── AuthContext.tsx   # Authentication state
│   │   └── ThemeContext.tsx  # Theme management
│   ├── hooks/
│   │   ├── useAICoach.ts     # AI chat hook
│   │   ├── useJournal.ts     # Journal CRUD hook
│   │   └── useMoodTracker.ts # Mood tracking hook
│   ├── navigation/
│   │   ├── AuthNavigator.tsx  # Auth flow
│   │   ├── MainNavigator.tsx  # Tab navigator
│   │   └── RootNavigator.tsx  # Root stack
│   ├── screens/
│   │   ├── WelcomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── SignupScreen.tsx
│   │   ├── DashboardScreen.tsx
│   │   ├── MoodTrackerScreen.tsx
│   │   ├── JournalScreen.tsx
│   │   └── AICoachScreen.tsx
│   ├── theme/
│   │   ├── colors.ts     # Color palette
│   │   ├── typography.ts # Font styles
│   │   └── spacing.ts    # Spacing & shadows
│   └── App.tsx
├── android/              # Android native code
├── ios/                  # iOS native code
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20
- React Native CLI
- For iOS: Xcode 15+ and CocoaPods
- For Android: Android Studio with SDK 34

### Installation

```bash
# Navigate to mobile directory
cd mobile

# Install dependencies
npm install

# For iOS, install pods
cd ios && pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## 🎨 Design System

The app uses a cohesive design system matching the web application:

### Colors
- **Primary**: Red to Orange gradient (`#E54D4D` → `#F5A623`)
- **Light theme**: Clean white backgrounds
- **Dark theme**: Deep charcoal backgrounds

### Typography
- System fonts with predefined styles (h1-h4, body, caption, etc.)

### Components
- Gradient buttons with glow effects
- Cards with warm shadow hover states
- Consistent border radius and spacing

## 🔌 Backend Integration (Coming Soon)

The hooks are prepared for Supabase integration:

```typescript
// src/hooks/useMoodTracker.ts
// TODO: Replace mock data with Supabase queries

// src/contexts/AuthContext.tsx
// TODO: Connect to Supabase Auth
```

### Environment Variables

Create a `.env` file when ready to connect:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📱 Screens

| Screen | Description |
|--------|-------------|
| Welcome | Landing/onboarding with feature highlights |
| Login | Email/password authentication |
| Signup | Account creation with name |
| Dashboard | Stats overview, quick actions, insights |
| Mood Tracker | 5-level mood selection with notes |
| Journal | Rich text editor with AI prompts |
| AI Coach | Chat interface with quick prompts |

## 🔐 Authentication Flow

1. User opens app → Welcome screen
2. Tap "Get Started" → Signup
3. Tap "Sign In" → Login
4. After auth → Main tab navigator
5. Sign out → Back to auth flow

## 📝 License

Part of the EdVisingU ecosystem. All rights reserved.

## ⚠️ Disclaimer

HeartWise AI is a coaching tool, not a replacement for professional therapy, medical advice, or crisis intervention.
