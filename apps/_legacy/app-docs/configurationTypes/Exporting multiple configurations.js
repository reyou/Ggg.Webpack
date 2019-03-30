//=============================================================================
// https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations
//=============================================================================
module.exports = [
  {
    output: {
      filename: "./dist-amd.js",
      libraryTarget: "amd"
    },
    entry: "./app.js"
  },
  {
    output: {
      filename: "./dist-commonjs.js",
      libraryTarget: "commonjs"
    },
    entry: "./app.js"
  }
];

//=============================================================================
