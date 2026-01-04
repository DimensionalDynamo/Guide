# Contributing

Thanks for contributing! This guide covers how to run and test the project locally.

## Setup
- Install Node.js LTS (recommended) and npm
- From project root: `npm install`

## Running the app
- Start dev server: `npm run dev` (opens at http://localhost:5173)

## Tests & Coverage
- Run tests: `npm test -- --run`
- Run coverage: `npm run coverage`

## Linting & Formatting
- Lint: `npm run lint`
- Format: `npm run format`

## Notes
- The app is offline-first and stores data locally using IndexedDB (Dexie).
- AI features require keys; set or replace them in `.env` or via the Settings screen.
- CI is configured to run tests and coverage but will only upload coverage to Codecov if `CODECOV_TOKEN` is set.
