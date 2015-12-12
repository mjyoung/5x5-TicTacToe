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
    }
  },

  checkWinner(selectedSquare) {
    let winner = false;
    let lastMove = selectedSquare.turn;
    let gameBoard = this.props.gameBoard;
    let countMatchRow = 0,
      countMatchColumn = 0,
      countMatchDiagonal = 0,
      countMatchDiagonal2 = 0;

    // check selected row
    for (var colIndex = 0; colIndex < 5; colIndex++) {
      if (gameBoard[selectedSquare.row][colIndex] === lastMove) {
        countMatchRow += 1;
      }
    }

    // check selected column
    for (var rowIndex = 0; rowIndex < 5; rowIndex++) {
      if (gameBoard[rowIndex][selectedSquare.column] === lastMove) {
        countMatchColumn += 1;
      }
    }

    // check diagonal
    if (selectedSquare.row === selectedSquare.column) {
      for (var index = 0; index < 5; index++) {
        if (gameBoard[index][index] === lastMove) {
          countMatchDiagonal += 1;
        }
      }
    }

    // check other diagonal
    for (var index = 0; index < 5; index++) {
      if (gameBoard[index][4-index] === lastMove) {
        countMatchDiagonal2 += 1;
      }
    }

    if (
      countMatchRow === 5 || countMatchColumn === 5 ||
      countMatchDiagonal === 5 || countMatchDiagonal2 === 5
    ) {
      winner = true;
      console.info('WINNER!', lastMove);
      TicTacToeActions.updateWinner(lastMove);
    }
    return winner;
  },

  handleSquareClick (ev) {
    if (ev.currentTarget.dataset.val) {
      return;
    }
    let selectedSquare = {
      row: ev.currentTarget.dataset.row,
      column: ev.currentTarget.dataset.column,
      turn: this.props.turn
    };
    TicTacToeActions.updateGameBoard(this.props.gameBoard, selectedSquare);

    let isWinner = this.checkWinner(selectedSquare);
    if (isWinner) {
      console.info('there is a winner');
      this.firebaseRefs.game.set({
        gameBoard: this.props.gameBoard,
        winner: this.props.turn,
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
        status: 'in progress'
      });
      TicTacToeActions.updateTurn(nextTurn);
    }
  },

  render() {
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
