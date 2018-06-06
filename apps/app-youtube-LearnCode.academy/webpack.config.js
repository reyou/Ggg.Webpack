var date = new Date();
process.env.NODE_ENV = "dev";
//=============================================================================
console.log("GggMessage:", "webpack build started:", date.toString());
console.log("GggMessage:", "process.env.NODE_ENV:", process.env.NODE_ENV);
//=============================================================================
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? false : "string",
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(
      {
        mangle: false,
        sourcemap: false
      }),
  ],
};
