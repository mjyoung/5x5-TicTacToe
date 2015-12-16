import alt from '../alt.js';

class TicTacToeActions {
  constructor() {
    this.generateActions(
      'getAllGames',
      'createGame',
      'setCurrentGame',
      'setGameBoard',
      'updateWinner',
      'updateTurn',
      'updateWinningSquares',
      'resetGame'
    );
  }

  updateGameBoard(gameBoard, selectedSquare = null) {
    let newGameBoard = gameBoard;
    if (selectedSquare) {
      newGameBoard[selectedSquare.row][selectedSquare.column] = selectedSquare.turn;
    }
    return newGameBoard;
  }
}

module.exports = alt.createActions(TicTacToeActions);
