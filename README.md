# 5x5 Tic-Tac-Toe

https://myoung-tic-tac-toe.firebaseapp.com/

### Features

- Indicates whose turn it currently is.
- Indicates winner when there is one.
- Implemented Firebase as a BaaS for persisting data.
- Can play on one computer/browser, or multiple computers/browsers. Synced with Firebase.
- Can return to an in-progress game at anytime using the unique game ID. <br>
    * Games are automatically saved to Firebase after every turn.
    * Example: https://myoung-tic-tac-toe.firebaseapp.com/games/38bb63bb-a2cb-4ff2-ad8d-ef8d14ae797f

### How to run locally

1. Clone down this repo
2. `npm install`
3. `npm start`
4. Open browser to `http://localhost:1337/`

### Technology Stack

#### Backend

- Persisting data using Firebase as a BaaS, with ReactFire mixin

#### Frontend

- React, React Router, Alt
- Webpack with hot reloading
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
- Stats -- show how many times X / O have won historically
- MSH colors/styles
- UX Design
- Separate development/prod webpack configs
- Make responsive
- and of course... refactor code
