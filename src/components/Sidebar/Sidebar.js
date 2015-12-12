import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menu/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';
import { Link } from 'react-router';

import './Sidebar.scss';

const Sidebar = React.createClass({
  render() {
    const leftNavStyle = {
      position: 'relative',
      width: '200px',
      fontFamily: '"Droid Sans", Helvetica, sans-serif'
    };

    const header = <h1 className="Sidebar-header">
      <span className="Sidebar-header--black">Tic</span>
      <span className="Sidebar-header--red">Tac</span>
      <span className="Sidebar-header--blue">Toe</span>
    </h1>;

    return (
      <div className="Sidebar">
        <LeftNav
          ref="leftNav"
          style={leftNavStyle}
          header={header}
          docked={true} >
          <Link to="/" activeClassName="active">
            <MenuItem index={0} className="Sidebar-menuItem">New Game</MenuItem>
          </Link>
          <Link to="/stats" activeClassName="active">
            <MenuItem index={1} className="Sidebar-menuItem">Stats</MenuItem>
          </Link>

          <MenuDivider />

          <div className="Sidebar-subheader">Find me on:</div>
          <a href="https://github.com/mjyoung/">
            <MenuItem index={2} className="Sidebar-menuItem">GitHub</MenuItem>
          </a>
          <a href="https://www.linkedin.com/in/michaeljy">
            <MenuItem index={3} className="Sidebar-menuItem">LinkedIn</MenuItem>
          </a>
          <a href="https://twitter.com/imMichaelYoung">
            <MenuItem index={4} className="Sidebar-menuItem">Twitter</MenuItem>
          </a>

        </LeftNav>
      </div>
    )
  }
});

module.exports = Sidebar;
