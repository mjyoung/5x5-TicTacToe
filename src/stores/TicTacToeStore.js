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
    this.winningSquares = [];
    this.currentGame = null;
    this.gameStats = {};

    this.bindListeners({
      handleSetCurrentGame: TicTacToeActions.SET_CURRENT_GAME,
      handleUpdateGameBoard: TicTacToeActions.UPDATE_GAME_BOARD,
      handleUpdateTurn: TicTacToeActions.UPDATE_TURN,
      handleUpdateWinner: TicTacToeActions.UPDATE_WINNER,
      handleUpdateWinningSquares: TicTacToeActions.UPDATE_WINNING_SQUARES,
      handleResetGame: TicTacToeActions.RESET_GAME,
      handleUpdateGameStats: TicTacToeActions.UPDATE_GAME_STATS
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

  handleUpdateWinningSquares(squares) {
    this.setState({winningSquares: squares})
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
      winningSquares: [],
      currentGame: null
    })
  }

  handleUpdateGameStats(gameStats) {
    this.setState({gameStats: gameStats});
  }
}

module.exports = alt.createStore(TicTacToeStore, 'TicTacToeStore');
