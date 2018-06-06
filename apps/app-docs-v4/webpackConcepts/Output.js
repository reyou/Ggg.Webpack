//=============================================================================
// https://webpack.js.org/concepts/output/
// https://webpack.js.org/configuration/output/
/**Configuring the output configuration options tells webpack how to write
 * the compiled files to disk. Note that, while there can be multiple entry
 * points, only one output configuration is specified. */
/*The output property tells webpack where to emit the bundles it creates and 
how to name these files, it defaults to ./dist. Basically, the entire app 
structure will get compiled into the folder that you specify in the output path. 
You can configure this part of the process by specifying an output field in 
your configuration: */
//=============================================================================
const path = require("path");
//=============================================================================
const config = {
  output: {
    filename: "bundle.js",
    path: "/home/proj/public/assets"
  }
};
//=============================================================================
// Multiple Entry Points
// writes to disk: ./dist/app.js, ./dist/search.js
var config2 = {
  entry: {
    app: "./src/app.js",
    search: "./src/search.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  }
};
//============================================================================
// Advanced
var config3 = {
  output: {
    path: "/home/proj/cdn/assets/[hash]",
    publicPath: "http://cdn.example.com/assets/[hash]/"
  }
};
//=============================================================================
var config4 = {
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js"
  }
};
//=============================================================================
module.exports = config;
//=============================================================================
