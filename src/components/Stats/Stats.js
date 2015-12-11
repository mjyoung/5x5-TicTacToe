import React from 'react';
import AltContainer from 'alt-container';
import TicTacToeStore from '../../stores/TicTacToeStore.js';

const StatsContainer = React.createClass({
  getInitialState() {
    let ticTacToeStoreState = TicTacToeStore.getState();
    return {
      gameBoard: ticTacToeStoreState.gameBoard,
      turn: ticTacToeStoreState.turn,
      winner: ticTacToeStoreState.winner
    };
  },

  render() {
    return (
      <AltContainer store={TicTacToeStore}>
        <div>
          <Stats />
        </div>
      </AltContainer>
    )
  }
});

const Stats = React.createClass({
  render() {
    return (
      <div className="Stats">
        Stats
      </div>
    );
  }
});

module.exports = StatsContainer;
