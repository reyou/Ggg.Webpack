//=============================================================================
// Configuration
// https://webpack.js.org/concepts/configuration/
//=============================================================================
var path = require("path");

const config = {
  entry: "./foo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js"
  }
};
//=============================================================================
// https://webpack.js.org/concepts/targets/
// https://webpack.js.org/configuration/target
const config2 = {
  target: "node"
};
//=============================================================================
module.exports = config;
//=============================================================================
