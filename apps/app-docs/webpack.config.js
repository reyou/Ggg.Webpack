//=============================================================================
// https://webpack.js.org/concepts/
var date = new Date();
const path = require("path");
console.log("GggMessage:", "webpack build started:", date.toString());
console.log("GggMessage:", "process.env.NODE_ENV:", process.env.NODE_ENV);
//=============================================================================
// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
//=============================================================================
const config = {
  /*An entry point indicates which module webpack should use to begin building 
  out its internal dependency graph. After entering the entry point, webpack 
  will figure out which other modules and libraries that entry point depends 
  on (directly and indirectly). */
  // https://webpack.js.org/concepts/#entry
  entry: "./src/index.js",
  /*The output property tells webpack where to emit the bundles it creates 
  and how to name these files, it defaults to ./dist. Basically, the entire 
  app structure will get compiled into the folder that you specify in the output 
  path. You can configure this part of the process by specifying an output field 
  in your configuration: */
  // https://webpack.js.org/concepts/#output
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js"
  },
  /*Loaders enable webpack to process more than just JavaScript files 
  (webpack itself only understands JavaScript). They give you the 
  ability to leverage webpack's bundling capabilities for all kinds of files 
  by converting them to valid modules that webpack can process */
  // https://webpack.js.org/concepts/#loaders
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader"
      }
    ]
  },
  /*While loaders are used to transform certain types of modules, 
  plugins can be leveraged to perform a wider range of tasks. 
  Plugins range from bundle optimization and minification all the 
  way to defining environment-like variables. The plugin interface 
  is extremely powerful and can be used to tackle a wide variety of 
  tasks. */
  // https://webpack.js.org/plugins/
  // https://stackoverflow.com/questions/37452402/webpack-loaders-vs-plugins-whats-the-difference
  /*Loader will transform files to js recognizable(and do some thing during transformation),
  plugins can do what ever they need on loaders output*/
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ],
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
module.exports = config;
