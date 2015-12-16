import React from 'react';
import TicTacToeActions from '../../actions/TicTacToeActions.js';
import _ from 'lodash';
import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import './TicTacToe.scss';

/*eslint-disable no-unused-vars */
const TicTacToe = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount() {
    if (this.props.gameId) {
      let ref = new Firebase('https://myoung-tic-tac-toe.firebaseio.com/games/' + this.props.gameId);
      this.bindAsObject(ref, 'game');
    }
  },

  componentWillUpdate(nextProps, nextState) {
    if (!nextState) {
      if (this.props.gameId) {
        let ref = new Firebase('https://myoung-tic-tac-toe.firebaseio.com/games/' + this.props.gameId);
        this.bindAsObject(ref, 'game');
      }
      return;
    }
    if (nextState.game.gameBoard === undefined || _.isEqual(this.props.gameBoard, nextState.game.gameBoard)) {
    } else {
      TicTacToeActions.updateGameBoard(nextState.game.gameBoard);
      TicTacToeActions.updateTurn(nextState.game.turn);
      TicTacToeActions.updateWinner(nextState.game.winner);
      TicTacToeActions.updateWinningSquares(nextState.game.winningSquares);
    }
  },

  checkWinner(selectedSquare) {
    let winner = false;
    let lastMove = selectedSquare.turn;
    let gameBoard = this.props.gameBoard;
    let arrMatchRow = [],
      arrMatchColumn = [],
      arrMatchDiagonal = [],
      arrMatchDiagonal2 = [],
      winningSquares = [];
    // check selected row
    for (var colIndex = 0; colIndex < 5; colIndex++) {
      if (gameBoard[selectedSquare.row][colIndex] === lastMove) {
        arrMatchRow.push([parseInt(selectedSquare.row, 10), colIndex]);
      }
    }

    // check selected column
    for (var rowIndex = 0; rowIndex < 5; rowIndex++) {
      if (gameBoard[rowIndex][selectedSquare.column] === lastMove) {
        arrMatchColumn.push([rowIndex, parseInt(selectedSquare.column, 10)]);
      }
    }

    // check diagonal
    if (selectedSquare.row === selectedSquare.column) {
      for (var index = 0; index < 5; index++) {
        if (gameBoard[index][index] === lastMove) {
          arrMatchDiagonal.push([index, index]);
        }
      }
    }

    // check other diagonal
    for (var index = 0; index < 5; index++) {
      if (gameBoard[index][4-index] === lastMove) {
        arrMatchDiagonal2.push([index, 4-index]);
      }
    }


    if (arrMatchRow.length === 5) {
      winner = true;
      TicTacToeActions.updateWinner(lastMove);
      TicTacToeActions.updateWinningSquares(arrMatchRow);
      winningSquares = arrMatchRow;
    } else if (arrMatchColumn.length === 5) {
      winner = true;
      TicTacToeActions.updateWinner(lastMove);
      TicTacToeActions.updateWinningSquares(arrMatchColumn);
      winningSquares = arrMatchColumn;
    } else if (arrMatchDiagonal.length === 5) {
      winner = true;
      TicTacToeActions.updateWinner(lastMove);
      TicTacToeActions.updateWinningSquares(arrMatchDiagonal);
      winningSquares = arrMatchDiagonal;
    } else if (arrMatchDiagonal2.length === 5) {
      winner = true;
      TicTacToeActions.updateWinner(lastMove);
      TicTacToeActions.updateWinningSquares(arrMatchDiagonal2);
      winningSquares = arrMatchDiagonal2;
    }
    return { winner: winner, winningSquares: winningSquares};

  },

  handleSquareClick (ev) {
    if (this.props.winner || ev.currentTarget.dataset.val) {
      return;
    }
    let selectedSquare = {
      row: ev.currentTarget.dataset.row,
      column: ev.currentTarget.dataset.column,
      turn: this.props.turn
    };
    TicTacToeActions.updateGameBoard(this.props.gameBoard, selectedSquare);
    let checkWinnerResults = this.checkWinner(selectedSquare);
    if (checkWinnerResults.winner) {
      console.log('this.props', this.props);
      console.log('this.state',  this.state);
      console.log(checkWinnerResults);
      this.firebaseRefs.game.set({
        gameBoard: this.props.gameBoard,
        winner: this.props.turn,
        winningSquares: checkWinnerResults.winningSquares,
        status: 'finished'
      });
    } else {
      let nextTurn = 'o';
      if (this.props.turn === 'o') {
        nextTurn = 'x';
      }
      this.firebaseRefs.game.set({
        gameBoard: this.props.gameBoard,
        turn: nextTurn,
        winner: null,
        winningSquares: null,
        status: 'in progress'
      });
      TicTacToeActions.updateTurn(nextTurn);
    }
  },

  render() {
    console.info(this.props.winningSquares);
    let gameBoard = this.props.gameBoard;
    let turn = null;
    if (this.props.turn) {
      turn = 'It is ' + this.props.turn + '\'s turn';
    }
    let winner = null;
    if (this.props.winner) {
      winner = 'Winner: ' + this.props.winner;
    }

    let gameBoardRowsHtml = [];
    _(gameBoard).forEach((row, rowIndex) => {
      _(row).forEach((val, valIndex) => {
        let key = [rowIndex, valIndex];
        let squareClassName = 'TicTacToe-square TicTacToe-square--empty';
        if (val === 'x') {
          squareClassName = 'TicTacToe-square TicTacToe-square--x';
        } else if (val === 'o') {
          squareClassName = 'TicTacToe-square TicTacToe-square--o';
        }
        if (_.some(this.props.winningSquares, key)) {
          squareClassName += ' TicTacToe-square--winner';
        }
        gameBoardRowsHtml.push(
          <li className={squareClassName}
              key={key}
              data-row={rowIndex}
              data-column={valIndex}
              data-val={val}
              onClick={this.handleSquareClick}>
            {val}
          </li>);
      }).value();
    }).value();
    return (
      <div className="TicTacToe">
        <div className="TicTacToe-turn">
          {turn}
        </div>
        <div>
          {winner}
        </div>
        <div className="TicTacToe-gameBoard">
          <ul>
            {gameBoardRowsHtml}
          </ul>
        </div>
      </div>
    );
  }
});
/*eslint-enable no-unused-vars */

module.exports = TicTacToe;
