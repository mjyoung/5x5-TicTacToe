# 5x5 Tic-Tac-Toe

https://myoung-tic-tac-toe.firebaseapp.com/

### Features

- Indicates whose turn it currently is.
- Indicates winner when there is one.
- Implemented Firebase as a BaaS for persisting data.
- Can play on one computer/browser, or multiple computers/browsers. Synced with Firebase.
- Can return to an in-progress game at anytime using the unique game ID. <br>
    * Games are automatically saved to Firebase after every turn.
    * Example: https://myoung-tic-tac-toe.firebaseapp.com/games/77d46c40-033c-4665-9f09-2901fad982c6
- Can look at some stats at `/stats/`

### How to run locally

1. Clone down this repo
2. `npm install`
3. `npm start`
4. Open browser to `http://localhost:1337/`

### How to build for deploying

1. `npm run build`

### Technology Stack

#### Backend

- Persisting data using Firebase as a BaaS, with ReactFire mixin

#### Frontend

- React, React Router, Alt
- Webpack with hot reloading (separate configs for dev/prod)
- ES6 with Babel
- SCSS
- ESLint

### Directory Structure

```
/src
    - /actions
    - /components
        - /ComponentName
            - ComponentName.js
            - ComponentName.scss
    - /stores
    - /styles (shared/global styles)
        - colors.scss
        - resets.scss
    - index.js (entry point, routes definitions)
```

### Other Notes

- Using the Block-Element-Modifier (BEM) naming convention for CSS classes

### TODO

- Tests -- unit tests with mocha/chai, functional tests with mocha/casperjs
- UX Design
- Separate development/prod webpack configs
- Make responsive
- and of course... refactor code
