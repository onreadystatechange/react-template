/**
 * @Author: pandali
 * @Date: 2018-02-27 16:21:14
 * @Last Modified by: pandali
 * @Last Modified time: 2018-02-28 10:03:25
 * 异步加载组件，js按需加载（code splitting）.
 */
import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
