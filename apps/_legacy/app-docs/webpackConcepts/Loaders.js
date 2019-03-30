//=============================================================================
// https://webpack.js.org/concepts/loaders/
// https://webpack.js.org/configuration/module/
/**Loaders can transform files from a different language (like TypeScript) to
 * JavaScript, or inline images as data URLs. Loaders even allow you to do
 * things like import CSS files directly from your JavaScript modules! */
//=============================================================================
// By convention, loaders are usually named xxx-loader (e.g. json-loader).
// See "How to Write a Loader?" for more information.
// https://webpack.js.org/development/how-to-write-a-loader
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
// Inline
// import Styles from 'style-loader!css-loader?modules!./styles.css';
//=============================================================================
// CLI
// You can also use loaders through the CLI:
// webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
//=============================================================================
