# FocusFlow 2026

![CI](https://github.com/<OWNER>/<REPO>/actions/workflows/ci.yml/badge.svg)

PWA-first personal productivity app scaffold.

- Run locally: npm install && npm run dev
- Replace API keys in `.env` if needed; keys are embedded for local dev per project spec.
- This repository contains a single app with exactly 7 screens (Dashboard, Pomodoro, Tasks & Habits, Analytics & Resources, AI Insights, Achievements & Rewards, Settings & Data).

Notes:
- Offline-first using Dexie (IndexedDB)
- PWA enabled via vite-plugin-pwa
- No authentication, single-user, local-first by design

Next steps: implement Dashboard features & Pomodoro core with offline logging.
