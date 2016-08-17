var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
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
      include: [
        path.resolve(__dirname)
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
      ],
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
