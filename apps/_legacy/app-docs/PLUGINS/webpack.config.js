//=============================================================================
// https://webpack.js.org/api/plugins/
//=============================================================================
var path = require("path");
var MyPlugin = require("./my-plugin.js");
//=============================================================================
const config = {
  entry: "./foo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js"
  },
  plugins: [
    new MyPlugin({
      options: "nada"
    })
  ]
};

module.exports = config;
//=============================================================================
