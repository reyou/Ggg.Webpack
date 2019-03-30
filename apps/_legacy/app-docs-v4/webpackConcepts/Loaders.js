//=============================================================================
// https://webpack.js.org/concepts/loaders/
// https://webpack.js.org/configuration/module/
/**Loaders can transform files from a different language (like TypeScript) to
 * JavaScript, or inline images as data URLs. Loaders even allow you to do
 * things like import CSS files directly from your JavaScript modules! */
//=============================================================================
// At a high level, loaders have two purposes in your webpack configuration:
// 1- The test property identifies which file or files should be transformed.
// 2- The use property indicates which loader should be used to do the transforming.
//=============================================================================
// By convention, loaders are usually named xxx-loader (e.g. json-loader).
// See "How to Write a Loader?" for more information.
// https://webpack.js.org/development/how-to-write-a-loader
//=============================================================================
const path = require("path");
//=============================================================================
// instruct webpack to use the css-loader for every .css file and the ts-loader
// for all .ts files:
var config = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader"
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  }
};
//=============================================================================
// Configuration
var config2 = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
//=============================================================================
/*"Hey webpack compiler, when you come across a path that resolves to a '.txt' 
file inside of a require()/import statement, use the raw-loader to transform 
it before you add it to the bundle." */
const config3 = {
  output: {
    filename: "my-first-webpack.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader"
      }
    ]
  }
};

//=============================================================================
// Inline
// import Styles from 'style-loader!css-loader?modules!./styles.css';
//=============================================================================
// CLI
// You can also use loaders through the CLI:
// webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
//=============================================================================
