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
    console.log(this.props);
    console.log(this.state);
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
  handleSquareClick(ev) {
    //console.log(ev.currentTarget);
    //console.log(ev.currentTarget.dataset.location);
    //console.log(ev.currentTarget.dataset.turn);
    //console.log(ev);
    TicTacToeActions.nextTurn();
  },

  render() {
    let gameBoard = this.props.gameBoard;
    let turn = this.props.turn;
    let gameBoardRowsHtml = [];
    _(gameBoard).forEach((row, rowIndex) => {
      _(row).forEach((val, valIndex) => {
        let key = [rowIndex, valIndex];
        let squareClassName = 'TicTacToe-square--empty';
        if (val === 'X') {
          squareClassName = 'TicTacToe-square--x';
        } else if (val === 'O') {
          squareClassName = 'TicTacToe-square--o';
        }
        gameBoardRowsHtml.push(<li className={squareClassName} key={key} data-location={key} data-turn={turn} onClick={this.handleSquareClick}>{val}</li>);
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
