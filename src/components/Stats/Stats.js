import React from 'react';

const Stats = React.createClass({
  render() {
    console.info('stats props', this.props);
    return (
      <div className="Stats">
        <h1>Stats</h1>
        Total Games Played: {this.props.calculatedStats.totalGames}
      </div>
    );
  }
});

module.exports = Stats;
