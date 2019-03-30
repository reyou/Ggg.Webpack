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
    entry: path.join(__dirname, "path", "file2.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "my-first-webpack.bundle.js"
    }
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    // Log result...
  }
);

//=============================================================================
