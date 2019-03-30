//=============================================================================
// https://webpack.js.org/api/node/
// https://webpack.js.org/api/node/#stats-object
//=============================================================================
const webpack = require("webpack");
const path = require("path");
//=============================================================================
// console.log(__dirname);
//=============================================================================
webpack(
  {
    entry: path.join(__dirname, "path", "file.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "my-first-webpack.bundle.js"
    }
  },
  (err, stats) => {
    if (err || stats.hasErrors()) {
      // Handle errors here
      console.log("error:", err);
      // https://webpack.js.org/api/node/#stats-object
      console.log("stats:", stats);
      console.log("stats.hasErrors():", stats.hasErrors());
    }
    console.log("Done processing.");
    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      })
    );
  }
);

//=============================================================================
