/**
 * Created by slashhuang on 16/9/11.
 * webpack打包相关
 */
'use strict';
var webpack = require("webpack"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  WebpackNotifierPlugin = require('webpack-notifier'),
  utils = require('./util'),
  extend = require('extend'),
  path = require('path'),
  pkgJSON = require('../package.json');
var entry_file = extend(
  {app:'app'},
  {jquery:'jquery'}
);
//webpack配置文件
module.exports = {
  watch: true,
  entry: entry_file,
  debug: true,
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), 'dist/'),
    filename: '[name].js',
    chunkFilename: '[name]_' + pkgJSON['version'] + '.js',
    publicPath: ''
  },
  resolve: {
    alias: {
       jquery:path.resolve(process.cwd(),'lib/jquery.min.js')
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'html',
        to: 'html'
      },
      {
        context: 'global/img',
        from: '**/*',
        to: 'img/common'
      },
      {
        from: 'img',
        to: 'img'
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new WebpackNotifierPlugin(
      {
        title: 'Webpack 编译成功',
        alwaysNotify: true
      }),
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity
    })
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /(node_modules)|(global\/lib\/)/,
      loader: 'babel-loader'
    },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&-convertValues')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-convertValues!less-loader')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap&-convertValues!sass-loader?sourceMap')
      }, {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
        loader: "file-loader?name=[name]_[sha512:hash:base64:7].[ext]"
      }, {
        test: /\.html/,
        loader: "html-loader?" + JSON.stringify({
          attrs: false,
          minimize: true,
          removeAttributeQuotes: false,
          collapseInlineTagWhitespace: true,
          preserveLineBreaks: false,
          conservativeCollapse: false,
          ignoreCustomFragments: [{
            source: '\\s?\\{\\{[\\s\\S]*?\\}\\}\\s?'
          }],
          customEventAttributes: [/^\@/]
        })
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};
