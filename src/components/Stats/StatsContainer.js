import React from 'react';
import AltContainer from 'alt-container';
import Stats from './Stats.js';
import TicTacToeStore from '../../stores/TicTacToeStore.js';
import TicTacToeActions from '../../actions/TicTacToeActions.js';
import _ from 'lodash';

const StatsContainer = React.createClass({
  getInitialState() {
    let ticTacToeStoreState = TicTacToeStore.getState();
    return {
      gameStats: ticTacToeStoreState.gameStats
    };
  },

  componentWillMount() {
    var gamesRef = new Firebase('https://myoung-tic-tac-toe.firebaseio.com/games');
    gamesRef.orderByChild('winner').on('value', function(snapshot) {
      TicTacToeActions.updateGameStats(snapshot.val());
    });
  },

  componentDidMount() {
    console.log('state', this.state);
    console.log(this.state.gameStats);
    console.log('props', this.props);
    TicTacToeStore.listen(this.onChange);
  },

  componentWillUnmount() {
    TicTacToeStore.unlisten();
  },

  onChange(state) {
    if (this.isMounted()) {
      this.setState({
        gameStats: state.gameStats
      });
    }
  },

  render() {
    console.log(this.state.gameStats);
    let calculatedStats = this.calculateStats(this.state.gameStats);
    return (
      <AltContainer store={TicTacToeStore}>
        <div>
          <Stats
            gameStats={this.state.gameStats}
            calculatedStats={calculatedStats} />
        </div>
      </AltContainer>
    )
  },

  calculateStats(stats) {
    let totalGames = _.size(stats);
    return { totalGames: totalGames };
  }
});

module.exports = StatsContainer;
