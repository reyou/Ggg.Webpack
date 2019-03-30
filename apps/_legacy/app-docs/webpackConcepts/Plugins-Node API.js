//=============================================================================
// https://webpack.js.org/concepts/plugins/#node-api
//=============================================================================
/**Even when using the Node API, users should pass plugins via the plugins
 * property in the configuration. Using compiler.apply should not be the
 * recommended way. */
//=============================================================================
const webpack = require("webpack"); //to access webpack runtime
const configuration = require("../webpack.config.js");

let compiler = webpack(configuration);
compiler.apply(new webpack.ProgressPlugin());

compiler.run(function(err, stats) {
  console.log("GggMessage:", "Plugins-Node API.js", new Date().toString());
});
//=============================================================================
