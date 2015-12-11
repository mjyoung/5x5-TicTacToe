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

    this.turn = 'o';

    this.bindListeners({
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD,
      handleNextTurn: TicTacToeActions.NEXT_TURN
    });
  }

  handleUpdateGameBoard(gameBoard) {
    this.gameBoard = gameBoard;
  }

  handleNextTurn() {
    if (this.turn === 'o') {
      this.turn = 'x';
    } else {
      this.turn = 'o';
    }
  }
}

module.exports = alt.createStore(TicTacToeStore, 'TicTacToeStore');
