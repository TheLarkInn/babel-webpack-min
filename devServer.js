var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');

config.entry.unshift(
  'webpack-dev-server/client?http://localhost:8081/',
  'webpack/hot/dev-server'
);

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  hot: true,
  quiet: true,
  publicPath: config.output.publicPath,
  // Avoids CPU overload on some systems.
  // https://github.com/facebookincubator/create-react-app/issues/293
  watchOptions: {
    ignore: /node_modules/
  }
});

server.listen(8081);

console.log('Running local server on http://localhost:8081');
