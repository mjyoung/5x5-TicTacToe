var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
