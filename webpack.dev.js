var path = require('path');
module.exports = {
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
          query: {
            presets: ["es2015","env","react"],
            plugins: ["transform-object-rest-spread","transform-decorators-legacy"]
          } 
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(png|jpg)$/, loader: "file-loader?emitFile=false&name=[path][name].[ext]" }
      ]
  },
  entry: './raw_resources/js/src/index.js',
  output: {
    filename: 'dev.bundle.js',
    path: path.resolve(__dirname, 'js')
  }
}