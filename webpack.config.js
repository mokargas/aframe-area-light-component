const webpack = require('webpack');


module.exports = {
  entry: {
    "aframe-area-light-component": "./index.js",
    "aframe-area-light-component.min": "./index.js",
  },
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
