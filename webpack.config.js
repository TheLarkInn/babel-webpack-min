var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './index.js'
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
        presets: [
          'babel-preset-es2015',
          'babel-preset-es2016'
        ],
        plugins: [
          'babel-plugin-transform-runtime'
        ]
      }
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
