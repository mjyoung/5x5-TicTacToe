import React from 'react';
import uuid from 'node-uuid';
import { Link } from 'react-router';
import TicTacToeActions from '../../actions/TicTacToeActions.js';

import './TicTacToeNewGameOverlay.scss';

const TicTacToeNewGameOverlay = React.createClass({

  componentDidMount() {
    TicTacToeActions.resetGame();
  },

  render() {
    let newGameLink = '/games/' + uuid.v4();
    return (
      <div className="TicTacToeNewGameOverlay">
        <div className="TicTacToeNewGameOverlay-container">
          <div className="TicTacToeNewGameOverlay-modal">
            Would you like to start a new game of Tic Tac Toe?
            <Link to={newGameLink}>
              <div className="TicTacToeNewGameOverlay-button">Let's Play!</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TicTacToeNewGameOverlay;
