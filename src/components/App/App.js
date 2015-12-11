import React from 'react';
import Sidebar from '../Sidebar/Sidebar.js';

import './App.scss';

const App = React.createClass({
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = App;
