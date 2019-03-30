"use strict";
exports.__esModule = true;
var path = require("path");
var config = {
    entry: "./foo.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "foo.bundle.js"
    }
};
exports["default"] = config;
//=============================================================================
