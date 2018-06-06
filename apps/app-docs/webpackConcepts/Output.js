//=============================================================================
// https://webpack.js.org/concepts/output/
// https://webpack.js.org/configuration/output/
/**Configuring the output configuration options tells webpack how to write
 * the compiled files to disk. Note that, while there can be multiple entry
 * points, only one output configuration is specified. */
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
module.exports = config;
//=============================================================================
