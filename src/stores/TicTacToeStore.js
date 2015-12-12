import alt from '../alt.js';
import TicTacToeActions from '../actions/TicTacToeActions.js';

class TicTacToeStore {
  constructor() {
    this.gameBoard = [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ];
    this.turn = 'o';
    this.winner = '';
    this.currentGame = null;

    this.bindListeners({
      handleSetCurrentGame: TicTacToeActions.SET_CURRENT_GAME,
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD,
      handleUpdateTurn: TicTacToeActions.UPDATE_TURN,
      handleUpdateWinner: TicTacToeActions.UPDATE_WINNER,
      handleResetGame: TicTacToeActions.RESET_GAME
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

  handleUpdateWinner(winner) {
    this.setState({winner: winner})
  }

  handleResetGame() {
    this.setState({
      gameBoard: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ],
      turn: 'o',
      winner: '',
      currentGame: null
    })
  }
}

module.exports = alt.createStore(TicTacToeStore, 'TicTacToeStore');
