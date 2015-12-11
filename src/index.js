/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {
  Router,
  Route
} from 'react-router';
import uuid from 'node-uuid';

import TicTacToeContainer from './components/TicTacToe/TicTacToe.js';
import StatsContainer from './components/Stats/Stats.js';
import './styles/resets.scss';

console.log(uuid.v4());

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path="/" component={TicTacToeContainer} />
    <Route path="/stats" component={StatsContainer} />
    <Route path=":gameId" component={TicTacToeContainer} />
  </Router>
  , document.getElementById('app'));
