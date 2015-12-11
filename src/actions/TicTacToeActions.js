import alt from '../alt.js';

class TicTacToeActions {
  constructor() {
    this.generateActions('getAllGames', 'createGame', 'updateGameBoard', 'nextTurn');
  }
}

module.exports = alt.createActions(TicTacToeActions);
