//=============================================================================
// https://webpack.js.org/configuration/plugins/
//=============================================================================
var webpack = require("webpack");
// importing plugins that do not come by default in webpack
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");
const config = {
  // adding plugins to your configuration
  plugins: [
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor-[hash].min.js"
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new ExtractTextPlugin({
      filename: "build.min.css",
      allChunks: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // compile time plugins
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    // webpack-dev-server enhancement plugins
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
//=============================================================================
