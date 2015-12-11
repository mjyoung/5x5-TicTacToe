import alt from '../alt.js';
import TicTacToeActions from '../actions/TicTacToeActions.js';

class TicTacToeStore {
  constructor() {
    this.gameBoard = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];

    this.turn = 'o';

    this.bindListeners({
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD,
      handleUpdateTurn: TicTacToeActions.UPDATE_TURN
    });
  }

  handleUpdateGameBoard(gameBoard) {
    console.info('handleUpdateGameBoard');
    this.setState({gameBoard: gameBoard});
  }

  handleUpdateTurn(nextTurn) {
    console.info('handleUpdateTurn');
    this.setState({turn: nextTurn});
  }
}

module.exports = alt.createStore(TicTacToeStore, 'TicTacToeStore');
