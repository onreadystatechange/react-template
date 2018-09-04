import React from 'react';
import { Link } from 'react-router-dom';

require('./Navigation.css');

/**
 * 公用 Header.
 * @param none
 */
class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav collapse navbar-collapse">
        <Link className="nav-item" to="/">
          <span className="nav-icon iconfont">&#xe608;</span>
          <span className="nav-text">Home</span>
        </Link>
        <Link className="nav-item" to="/about">
          <span className="nav-icon iconfont">&#xe602;</span>
          <span className="nav-text">About</span>
        </Link>
        <Link className="nav-item" to="/contact">
          <span className="nav-icon iconfont">&#xe601;</span>
          <span className="nav-text">Contact</span>
        </Link>
      </nav>
    );
  }
}

export default Navigation;
