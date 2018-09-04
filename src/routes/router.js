/**
 * @Author: pandali
 * @Date: 2018-01-10 16:03:48
 * @Last Modified by: pandali
 * @Last Modified time: 2018-02-28 11:34:30
 * 整合所有页面组件.
 */
import asyncComponent from './AsyncComponent';
import App from 'components/App';
import Navigation from 'components/Navigation';

/**
 * 使用了 webpackChunkName, 使 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js 。
 * import 规范不允许控制模块的名称或其他属性，因为 "chunks" 只是 webpack 中的一个概念。
 * 幸运的是，webpack 中可以通过注释接收一些特殊的参数，而无须破坏规定。
 * 想了解更多关于 webpackChunkName 和其他可用选项，查看 import() 相关文档
 * https://doc.webpack-china.org/api/module-methods#import-
 *
 */
const Home = asyncComponent(() =>
  import(/* webpackChunkName: "home" */ 'pages/Home')
);
const About = asyncComponent(() =>
  import(/* webpackChunkName: "about" */ 'pages/About')
);
const Contact = asyncComponent(() =>
  import(/* webpackChunkName: "contact" */ 'pages/Contact')
);

export { App, Home, About, Contact };
