const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extend = require('extend');
const webpack = require('webpack');

const config = require('../config');
const utils = require('./utils');

const env = process.env.NODE_ENV || 'dev';

const name = process.env.npm_package_name;
const version = process.env.npm_package_version;
const versionCode = process.env.npm_package_versionCode;
const build = process.env.npm_package_build;

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'react-redux', 'redux'],
    app: path.join(`${config.build.srcPath}`, 'main.js')
  },
  /**
   * 使用 chunkFilename，它决定非入口 chunk 的名称.
   * 参考文档 https://doc.webpack-china.org/configuration/output/#output-chunkfilename.
   */
  output: {
    path: config.build.assetsRoot,
    filename:
      process.env.NODE_ENV === 'production' ? '[name].[hash].js?' : '[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath,
    chunkFilename:
      process.env.NODE_ENV === 'production' ? '[name].[hash].js?' : '[name].js'
  },
  /**
   * 设置resolve文件路径，避免不必要的文件查找,更快速的构建.
   */
  resolve: {
    extensions: ['.ts', '.jsx', '.js', '.json'],
    modules: [path.resolve(__dirname, '..', 'node_modules')],
    alias: {
      '@': `${config.build.srcPath}/`,
      components: `${config.build.srcPath}/components/`,
      stores: `${config.build.srcPath}/stores/`,
      styles: `${config.build.srcPath}/styles/`,
      config: `${config.build.srcPath}/config/`,
      pages: `${config.build.srcPath}/pages/`,
      fonts: `${config.build.srcPath}/fonts/`
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      FMT_VERSION_CODE: versionCode,
      FMT_BUILD: build,
      FMT_ENV: `'${env}'`,
      FMT_NAME: `'${name}'`,
      FMT_VERSION: `'${version}'`
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory',
            options: {
              presets: ['env']
            }
          }
        ],
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          publicPath: function(url) {
            const puthUrl =
              process.env.NODE_ENV === 'production'
                ? url.replace(/static/, '..')
                : url;
            return puthUrl;
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};
