import alt from '../alt.js';
import TicTacToeActions from '../actions/TicTacToeActions.js';

class TicTacToeStore {
  constructor() {
    this.gameBoard = [
      [null, 'X', null, 'O', null],
      [null, 'X', null, null, null],
      [null, 'X', 'O', null, null],
      ['O', 'X', null, null, 'O'],
      [null, 'X', null, null, null]
    ];

    this.bindListeners({
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD
    });
  }

  handleUpdateGameBoard(gameBoard) {
    this.gameBoard = gameBoard;
  }
}

module.exports = alt.createStore(TicTacToeStore, 'TicTacToeStore');
