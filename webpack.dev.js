var path = require('path');
module.exports = {
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
  },
  entry: './raw_resources/js/src/babelified-index.js',
  output: {
    filename: 'dev.bundle.js',
    path: path.resolve(__dirname, 'js')
  }
}