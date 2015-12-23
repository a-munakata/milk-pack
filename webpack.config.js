var appName = 'app';
var webpack = require('webpack');
var path = require("path");

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src/js/main.js')
  ],
  output: {
    filename: 'build/bundle.js',
  },
  devtool: 'eval',
  eslint: {
    configFile: './.eslintrc'
  },
  stylint: {
    reporter: 'stylint-stylish',
    config: './.stylintrc'
  },
  module: {
    preLoaders: [{
      test: /\.styl$/,
      loader: 'stylint'
    }],
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.css$/,
      loader: 'css?minimize'
    }, {
      test: /\.styl$/,
      loader: 'style!css!stylus'
    }, {
      test: /\.jsx?$/,
      loaders: [
        'react-hot',
        'babel'
      ],
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.jsx?$/,
      loader: "eslint-loader",
      exclude: /(node_modules|bower_components)/,
    }]
  },
  resolve: {
    // root: path.join(current, 'app/js/modules')
  }
};

module.exports = config;
