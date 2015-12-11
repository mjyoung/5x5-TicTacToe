/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router';
import uuid from 'node-uuid';

import App from './components/App/App.js';
import TicTacToeContainer from './components/TicTacToe/TicTacToe.js';
import StatsContainer from './components/Stats/Stats.js';
import './styles/resets.scss';

console.log(uuid.v4());

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' name='root' component={App}>
      <IndexRoute component={TicTacToeContainer} status='none' />
      <Route path='stats' name='stats' component={StatsContainer} />
      <Route path='games/:gameId' name='games' component={TicTacToeContainer} />
    </Route>
  </Router>
  , document.getElementById('app-container'));
