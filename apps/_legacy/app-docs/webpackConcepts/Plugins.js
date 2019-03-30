//=============================================================================
// https://webpack.js.org/concepts/plugins/
/**Plugins are the backbone of webpack. webpack itself is built on the same
 * plugin system that you use in your webpack configuration! They also serve
 * the purpose of doing anything else that a loader cannot do. */
//=============================================================================
// https://webpack.js.org/configuration/plugins/
// https://webpack.js.org/plugins
//=============================================================================
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
//=============================================================================
/**A webpack plugin is a JavaScript object that has an apply property.
 * This apply property is called by the webpack compiler, giving access to
 * the entire compilation lifecycle. */
//=============================================================================
function ConsoleLogOnBuildWebpackPlugin() {}

ConsoleLogOnBuildWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin("run", function(compiler, callback) {
    console.log("The webpack build process is starting!!!");

    callback();
  });
};
//=============================================================================
// Function.prototype.apply()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max);
// expected output: 7
var min = Math.min.apply(null, numbers);
console.log(min);
// expected output: 2
//=============================================================================
const config = {
  entry: "./path/to/my/entry/file.js",
  output: {
    filename: "my-first-webpack.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
//=============================================================================
module.exports = config;
//=============================================================================
