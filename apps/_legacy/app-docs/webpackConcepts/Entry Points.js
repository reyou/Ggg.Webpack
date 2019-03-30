//=============================================================================
// https://webpack.js.org/concepts/entry-points/
// https://webpack.js.org/configuration/entry-context/
//=============================================================================
// Single Entry
const config = {
  entry: "./path/to/my/entry/file.js"
};
//=============================================================================
// Object Syntax
// The single entry syntax for the entry property is a shorthand for:
const config2 = {
  entry: {
    main: "./path/to/my/entry/file.js"
  }
};
//=============================================================================
// Separate App and Vendor Entries
const config3 = {
  entry: {
    app: "./src/app.js",
    vendors: "./src/vendors.js"
  }
};
//=============================================================================
// Multi Page Application
// As a rule of thumb: for each HTML document use exactly one entry point.
const config4 = {
  entry: {
    pageOne: "./src/pageOne/index.js",
    pageTwo: "./src/pageTwo/index.js",
    pageThree: "./src/pageThree/index.js"
  }
};
//=============================================================================
module.exports = config;
//=============================================================================
