import React from 'react';

import './TicTacToeNewGameOverlay.scss';

const TicTacToeNewGameOverlay = React.createClass({
  componentDidMount() {
    console.log('NEW GAME OVERLAY');
  },

  render() {
    const buttonStyles = {
      background: 'red'
    };
    return (
      <div className="TicTacToeNewGameOverlay">
        <div className="TicTacToeNewGameOverlay-container">
          <div className="TicTacToeNewGameOverlay-modal">
            Would you like to start a new game of Tic Tac Toe?
            <div className="TicTacToeNewGameOverlay-button">Let's Play!</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TicTacToeNewGameOverlay;
