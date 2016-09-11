/**
 * Created by slashhuang on 16/9/11.
 * webpack打包相关
 */
'use strict';
var webpack = require("webpack"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  WebpackNotifierPlugin = require('webpack-notifier'),
 HtmlWebpackPlugin = require('html-webpack-plugin'),
  extend = require('extend'),
  path = require('path'),
  pkgJSON = require('../package.json');
//webpack配置文件
module.exports = {
  watch: true,
  entry:  {
    app:'app',
    common:['jquery']
  },
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
      'jquery':path.resolve(process.cwd(),'lib/jquery.min.js'),
      'app':path.resolve(process.cwd(),'app.js')
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
          from: 'images',
          to: ''},
        {
          from: 'manifest.json',
          to: ''}
      ]),
    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
   new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity
    }),
    new WebpackNotifierPlugin({
        title: 'Webpack 编译成功',
        alwaysNotify: true
      }),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /(node_modules)/,
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
      }
    ]
  }
};
