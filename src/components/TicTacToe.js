import React from 'react';
import AltContainer from 'alt-container';
import TicTacToeStore from '../stores/TicTacToeStore.js';

let TicTacToeContainer = React.createClass({
  getInitialState() {
    let ticTacToeStore = TicTacToeStore.getState();
    return {
      gameBoard: ticTacToeStore.gameBoard
    };
  },

  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
  },

  render() {
    return (
      <AltContainer store={TicTacToeStore}>
        <div>
          <TicTacToe gameBoard={this.state.gameBoard} />
          Hello, world
        </div>
      </AltContainer>
    )
  }
});

let TicTacToe = React.createClass({
  render() {
    let gameBoard = this.props.gameBoard;
    return (
      <div>{gameBoard}
      </div>
    );
  }
});

module.exports = TicTacToeContainer;
