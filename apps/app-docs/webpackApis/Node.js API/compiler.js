//=============================================================================
// https://webpack.js.org/api/node/
// https://webpack.js.org/api/node/#run
// https://webpack.js.org/api/node/#stats-object
//=============================================================================
const webpack = require("webpack");
const path = require("path");
//=============================================================================
// console.log(__dirname);
//=============================================================================
const compiler = webpack({
  entry: path.join(__dirname, "path", "file.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js"
  }
});
compiler.run((err, stats) => {
  console.log("error:", err);
  console.log("stats:", stats);
  console.log("stats.hasErrors():", stats.hasErrors());
});
//=============================================================================
