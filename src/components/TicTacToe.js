import React from 'react';
import AltContainer from 'alt-container';
import TicTacToeStore from '../stores/TicTacToeStore.js';
import _ from 'lodash';

import './TicTacToe.scss';

let TicTacToeContainer = React.createClass({
  getInitialState() {
    let ticTacToeStore = TicTacToeStore.getState();
    return {
      gameBoard: ticTacToeStore.gameBoard
    };
  },

  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
  },

  render() {
    return (
      <AltContainer store={TicTacToeStore}>
        <div>
          <TicTacToe gameBoard={this.state.gameBoard} />
        </div>
      </AltContainer>
    )
  }
});

let TicTacToe = React.createClass({
  render() {
    let gameBoard = this.props.gameBoard;
    let gameBoardRowsHtml = [];
    _(gameBoard).forEach((row, rowIndex) => {
      _(row).forEach((val, valIndex) => {
        let key = [rowIndex, valIndex];
        if (val === 'X') {
          gameBoardRowsHtml.push(<li className="TicTacToe-square--X" key={key} data-location={key}>{val}</li>);
        } else if (val === 'O') {
          gameBoardRowsHtml.push(<li className="TicTacToe-square--O" key={key} data-location={key}>{val}</li>);
        } else {
          gameBoardRowsHtml.push(<li className="TicTacToe-square--empty" key={key} data-location={key}>{val}</li>);
        }


      }).value();
    }).value();
    return (
      <div className="TicTacToe">
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
