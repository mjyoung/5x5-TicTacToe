import React from 'react';
import AltContainer from 'alt-container';
import TicTacToeStore from '../../stores/TicTacToeStore.js';
import TicTacToeActions from '../../actions/TicTacToeActions.js';
import TicTacToe from './TicTacToe.js';
import TicTacToeNewGameOverlay from './TicTacToeNewGameOverlay.js';

const TicTacToeContainer = React.createClass({
  getInitialState() {
    let ticTacToeStoreState = TicTacToeStore.getState();
    return {
      gameBoard: ticTacToeStoreState.gameBoard,
      turn: ticTacToeStoreState.turn,
      winner: ticTacToeStoreState.winner,
      winningSquares: ticTacToeStoreState.winningSquares
    };
  },

  componentWillReceiveProps(nextProps) {
    TicTacToeActions.setCurrentGame(nextProps.routeParams.gameId);
  },

  componentWillMount() {
    TicTacToeActions.setCurrentGame(this.props.routeParams.gameId);
  },

  componentDidMount() {
    TicTacToeStore.listen(this.onChange);
  },

  componentWillUnmount() {
    TicTacToeActions.resetGame();
    TicTacToeStore.unlisten();
  },

  onChange(state) {
    if (this.isMounted()) {
      this.setState({
        gameBoard: state.gameBoard,
        turn: state.turn,
        winner: state.winner,
        winningSquares: state.winningSquares
      });
    }
  },

  render() {
    let ticTacToeNewGameOverlay;
    if (this.props.route.status === 'none') {
      ticTacToeNewGameOverlay = <TicTacToeNewGameOverlay history={this.props.history} />;
    }
    return (
      <AltContainer store={TicTacToeStore}>
        <div>
          {ticTacToeNewGameOverlay}
          <TicTacToe key={this.props.routeParams.gameId}
            gameId={this.props.routeParams.gameId}
            gameBoard={this.state.gameBoard}
            turn={this.state.turn}
            winner={this.state.winner}
            winningSquares={this.state.winningSquares} />
        </div>
      </AltContainer>
    )
  }
});

module.exports = TicTacToeContainer;
