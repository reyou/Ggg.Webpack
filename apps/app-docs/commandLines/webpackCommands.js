//=============================================================================
// https://webpack.js.org/concepts/
//=============================================================================
var create_file = "New-Item webpack.config.js -type file";
//=============================================================================
var npm = {
  "html-webpack-plugin": "npm install html-webpack-plugin --save",
  webpack: "npm install webpack --save",
  "css-loader": "npm install css-loader --save-dev",
  "ts-loader": "npm install ts-loader --save-dev",
  "typescript-wp":
    "npm install typescript ts-node @types/node @types/webpack --save-dev",
  typescript: "npm install typescript -g",
  // https://webpack.js.org/configuration/dev-server/
  "webpack-dev-server": "npm install webpack-dev-server --save-dev",
  // https://github.com/webpack/webpack-cli
  "webpack-cli": "npm install webpack-cli -D",
  babel: "npm install babel-register jsxobj babel-preset-es2015 --save-dev"
};
//=============================================================================
var tsc = "tsc .webpack.config.ts";
//=============================================================================
// https://webpack.js.org/configuration/dev-server/
var webpack_compile = "webpack";
// https://webpack.js.org/api/cli/#watch-options
var watch = "webpack --watch";
// https://webpack.js.org/configuration/watch/#changes-seen-but-not-processed
var progress = "webpack --watch  --progress";
var server = "webpack-dev-server";
// To switch to iframe mode
var iframe = "webpack-dev-server --inline=false";
var Chrome = "webpack-dev-server --open";
//=============================================================================
// api
// https://webpack.js.org/api/cli/
var api = {
  help: "webpack --help",
  "Usage with config file": "webpack --config webpack.config.js",
  "entry and output": "webpack src/index.js dist/bundle.js",
  "Suppress output of webpack": "webpack --silent",
  "Print result of webpack as a JSON": "webpack --json",
  "Save result of webpack as a JSON": "webpack --json > stats.json",
  "stats data": "webpack --profile --json > compilation-stats.json",
  // https://webpack.js.org/api/cli/#environment-options
  // sets env.production == true
  "Environment Options production": "webpack --env.production",
  // sets env.platform == "web"
  "Environment Options platform": "webpack --env.platform=web",
  "input and output":
    "webpack.js index=./src/index.js index2=./src/index2.js --output-path='./dist' " +
    "--output-filename='[name][hash].bundle.js' --devtool source-map " +
    "--output-source-map-filename='[name]123.map'",
  // Switch loaders to debug mode
  debug: "webpack --debug",
  // Define source map type for the bundled resources
  devtool: "webpack --devtool",
  // Print compilation progress in percentage
  progress: "webpack --progress",
  // https://webpack.js.org/api/cli/#profiling
  // Paired with --progress, --profile gives you an in depth idea of which
  // step in the compilation is taking how long.
  "captures timing information": "webpack --profile"
};

//=============================================================================
