import alt from '../alt.js';

class TicTacToeActions {
  constructor() {
    this.generateActions(
      'getAllGames',
      'createGame'
    );
  }

  updateTurn(turn) {
    let nextTurn = 'o';
    if (turn === 'o') {
      nextTurn = 'x';
    }
    return nextTurn;
  }

  updateGameBoard(gameBoard, selectedSquare) {
    let newGameBoard = gameBoard;
    newGameBoard[selectedSquare.row][selectedSquare.column] = selectedSquare.turn;
    return newGameBoard;
  }
}

module.exports = alt.createActions(TicTacToeActions);
