import alt from '../alt.js';

class TicTacToeActions {
  constructor() {
    this.generateActions('getAllGames', 'createGame', 'updateGameBoard');
  }
}

module.exports = alt.createActions(TicTacToeActions);
