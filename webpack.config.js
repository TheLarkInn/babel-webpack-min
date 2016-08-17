var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './index'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  loaders: [
    {
      loader: 'babel',
      exclude: /node_modules/,
      test: /\.js$/,
      query: {
        presets: ['es2015']
      }
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
