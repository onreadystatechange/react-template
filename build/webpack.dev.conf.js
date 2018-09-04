var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var port = process.env.PORT || config.dev.port;

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    // 会将所有的样式文件打包成一个单独的style.css
    new ExtractTextPlugin('app.css', {
      disable: false,
      allChunks: true // 所有独立样式打包成一个css文件
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(`${config.dev.rootSrc}`, 'index.html'),
      chunksSortMode: 'none'
    }),
    // 自动分析重用的模块并且打包成单独的文件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new BrowserSyncPlugin(
      {
        // 设置热更新代理.
        port: port,
        proxy: `http://localhost:${port}/`
      },
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: true
      }
    )
  ]
});
