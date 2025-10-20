# GutterPro App

GutterPro is a React Native + Expo application designed for gutter installation businesses.  
It allows users to manage jobs, capture photos, record measurements, and generate professional estimates.  

This README is tailored for **Week 1: Project Bootstrapping**, including architecture setup and initial backend connection to Supabase.

---

## Project Objectives

- Provide a mobile-first solution for gutter businesses to replace outdated manual processes.
- Allow secure per-user data storage with retention policies.
- Enable offline-first functionality for field work.
- Provide a modular architecture for fast feature additions (photo capture, measurement canvas, PDF generation).

---

## Project Structure

├── App.tsx # Root entry point with navigation
├── app.json # Expo configuration
├── babel.config.js # Babel configuration for NativeWind/Tailwind
├── package.json # Project dependencies & scripts
├── tailwind.config.js # TailwindCSS setup for React Native
├── tsconfig.json # TypeScript config
├── .env # Environment variables for Supabase
├── README.md # This file
└── src/
├── components/ # Reusable UI components (Button, Card, etc.)
├── hooks/ # Custom hooks (useAuth, useNetworkStatus)
├── lib/ # Shared libraries & constants (supabase.ts)
├── screens/ # App screens (Login, Dashboard, JobForm)
├── services/ # Business logic (jobs, storage, sync)
├── styles/ # Theme & Tailwind extensions
└── utils/ # Utility functions (format, logger, validation)



---

## Getting Started (Week 1)

### 1. Clone the repo
```bash
git clone <repo-url>
cd "Gutter Pro Project\gutterpro"
---
### 2. Install dependencies
npm install
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npm install nativewind tailwindcss @supabase/supabase-js @react-native-async-storage/async-storage

### Set environment variables
EXPO_PUBLIC_SUPABASE_URL=<your-supabase-url>
EXPO_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>

### start expo
npx expo start
Week 1 Goals Achieved

Project skeleton functional

Supabase connection & auth initialized

Navigation stack setup

TailwindCSS/NativeWind styling configured

Folder structure aligned with future Week 2–6 modules

Testing

Navigate through the app screens to verify routing works.

Test Supabase authentication:

Sign up a test user

Log in and confirm session is saved

Confirm Tailwind styling renders correctly.

Ensure console logs appear for Supabase connection checks.

Notes for Developers

Use src/components for reusable UI elements.

Use src/hooks for custom logic like auth state, network detection, storage cleanup.

src/services is where backend operations live (jobs, storage, sync).

Always wrap paths with spaces in quotes in PowerShell.

Keep .env credentials secret; never commit them.

Next Steps (Week 2+)

Add login/signup validation and dashboard CRUD.

Integrate sample customer data for testing.

Set up photo capture and offline-first storage workflows.

Begin implementing per-user storage retention policy.