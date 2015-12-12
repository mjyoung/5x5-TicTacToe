var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: false,
  debug: false,
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }],
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel',
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss$/,
        loader: "react-hot!style!css!sass"
      }, {
        test: /\.css$/,
        loader: 'react-hot!style!css'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      }
    ]
  }
};
