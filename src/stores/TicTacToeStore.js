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
    this.winner = '';

    this.bindListeners({
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD,
      handleUpdateTurn: TicTacToeActions.UPDATE_TURN,
      handleDeclareWinner: TicTacToeActions.DECLARE_WINNER
    });
  }

  handleUpdateGameBoard(gameBoard) {
    this.setState({gameBoard: gameBoard});
  }

  handleUpdateTurn(nextTurn) {
    this.setState({turn: nextTurn});
  }

  handleDeclareWinner(winner) {
    this.setState({winner:  winner})
  }
}

module.exports = alt.createStore(TicTacToeStore, 'TicTacToeStore');
