//=============================================================================
// TypeScript
// https://webpack.js.org/configuration/configuration-languages/
//=============================================================================
// tsc .\webpack.config.ts
//=============================================================================
import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
  entry: "./foo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js"
  }
};

export default config;
//=============================================================================
