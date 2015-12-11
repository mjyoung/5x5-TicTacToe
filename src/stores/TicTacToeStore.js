import alt from '../alt.js';
import TicTacToeActions from '../actions/TicTacToeActions.js';

class TicTacToeStore {
  constructor() {
    this.gameBoard = ['M', 'S', 'X', 'B'];

    this.bindListeners({
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD
    });
  }

  handleUpdateGameBoard(gameBoard) {
    this.gameBoard = gameBoard;
  }
}

module.exports = alt.createStore(TicTacToeStore, 'TicTacToeStore');
