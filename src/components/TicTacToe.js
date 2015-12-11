import React from 'react';
import AltContainer from 'alt-container';
import TicTacToeStore from '../stores/TicTacToeStore.js';
import TicTacToeActions from '../actions/TicTacToeActions.js';
import _ from 'lodash';

import './TicTacToe.scss';

let TicTacToeContainer = React.createClass({
  getInitialState() {
    let ticTacToeStore = TicTacToeStore.getState();
    return {
      gameBoard: ticTacToeStore.gameBoard,
      turn: ticTacToeStore.turn
    };
  },

  componentDidMount() {
    TicTacToeStore.listen(this.onChange);
  },

  onChange(state) {
    this.setState({
      gameBoard: state.gameBoard,
      turn: state.turn
    })
  },

  render() {
    return (
      <AltContainer store={TicTacToeStore}>
        <div>
          <TicTacToe gameBoard={this.state.gameBoard} turn={this.state.turn} />
        </div>
      </AltContainer>
    )
  }
});

let TicTacToe = React.createClass({
  checkWinner(selectedSquare) {
    let lastMove = selectedSquare.turn;
    let gameBoard = this.props.gameBoard;
    var countMatchRow = 0,
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
      console.info('WINNER!', lastMove);
    }

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

    this.checkWinner(selectedSquare);

    TicTacToeActions.updateTurn(this.props.turn);
  },

  render() {
    let gameBoard = this.props.gameBoard;
    let turn = this.props.turn;
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
          It is {turn}'s turn.
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

module.exports = TicTacToeContainer;
