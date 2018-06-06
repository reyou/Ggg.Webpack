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
    filename: "watch.bundle.js"
  }
});
var watching = compiler.watch(
  {
    /* watchOptions */
  },
  (err, stats) => {
    console.log("error:", err);
    console.log("stats:", stats);
    console.log("stats.hasErrors():", stats.hasErrors());
    /*The watch method returns a Watching instance that exposes 
    .close(callback) method. Calling this method will end watching:*/
    setTimeout(function() {
      watching.close(() => {
        console.log("Watching Ended.");
      });
    }, 5000);
  }
);
//=============================================================================
