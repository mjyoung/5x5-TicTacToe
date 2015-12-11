import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="stats">Stats</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
