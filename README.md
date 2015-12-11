# 5x5 Tic-Tac-Toe

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
- Implement Firebase as a BaaS (partially implemented -- currently saving completed game boards)
- Tests -- unit tests with mocha/chai, functional tests with mocha/casperjs
- Stats -- show how many times X / O have won historically
- MSH colors/styles
- UX Design
- Separate development/prod webpack configs
- Make responsive
- and of course... refactor code
