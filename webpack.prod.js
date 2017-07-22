var path = require('path');
const webpack = require('webpack');
module.exports = {
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
          query: {
            presets: ["airbnb", "es2015", "stage-0","env","react"],
            plugins: ["transform-object-rest-spread","transform-decorators-legacy"]
          } 
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(png|jpg)$/, loader: "file-loader?emitFile=false&name=[path][name].[ext]" }
      ]
  },
  entry: './raw_resources/js/src/index.js',
  output: {
    filename: 'prod.bundle.js',
    path: path.resolve(__dirname, 'js')
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}