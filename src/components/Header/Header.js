import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Header.css';
import 'fonts/iconfont.css';
import Navigation from '../Navigation';
/**
 * 公用 Header.
 *
 */
class Header extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      scrollTop: 0,
      headBackground: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;

    this.setState({
      scrollTop: scrollTop
    });
  }

  render() {
    if (this.state.scrollTop && this.state.scrollTop >= 40) {
      this.state.headBackground = true;
    } else {
      this.state.headBackground = false;
    }

    var headClass = classNames({
      'viewsFramework-header': true,
      header: true,
      'bg-back': this.state.headBackground
    });
    return (
      <header ref="Header" className={headClass}>
        <div className="inner">
          <Link to="/" className="logo">
            <img
              src={require('./logo.png')}
              width="80"
              height="20"
              alt="React"
            />
          </Link>
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
