/**
 * @Author: pandali
 * @Date: 2018-01-09 13:52:52
 * @Last Modified by: pandali
 * @Last Modified time: 2018-02-27 13:19:35
 */

import React, { Component } from 'react';
import 'styles/reast.css';
import 'styles/layout.scss';
import 'styles/weui.css';
import './App.scss';

import Header from '../Header';

class App extends Component {
  render () {
    return (
      <div className="views-framework">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
