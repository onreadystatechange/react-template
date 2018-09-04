/**
 * @Author: pandali
 * @Date: 2018-01-10 16:01:55
 * @Last Modified by: pandali
 * @Last Modified time: 2018-02-28 10:14:59
 * 入口文件.
 */

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Zepto from 'webpack-zepto';
import App from 'components/App';
import routes from './routes';

import reducers from './stores/reducers';

import { config, container } from './landrover/business/index';
import MallService from './service/mall.service';

/**
 * http service.
 */
const mallService = new MallService();

/**
 * redux.
 */
const store = createStore(reducers);

mallService.setup();
container.mallService = mallService;

window.$ = window.Zepto = Zepto;
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        {routes.map((route, index) => (
          // 循环输出Route.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </App>
    </Router>
  </Provider>,
  document.getElementById('App')
);
