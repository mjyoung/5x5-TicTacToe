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
    this.currentGame = null;

    this.bindListeners({
      handleSetCurrentGame: TicTacToeActions.SET_CURRENT_GAME,
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD,
      handleUpdateTurn: TicTacToeActions.UPDATE_TURN,
      handleDeclareWinner: TicTacToeActions.DECLARE_WINNER
    });
  }

  handleSetCurrentGame(uuid) {
    this.setState({currentGame: uuid});
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
