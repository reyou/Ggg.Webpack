// "Raw" Loader
// https://webpack.js.org/api/loaders/#-raw-loader
//=============================================================================
module.exports = function(content) {
  assert(content instanceof Buffer);
  return someSyncOperation(content);
  // return value can be a `Buffer` too
  // This is also allowed if loader is not "raw"
};
module.exports.raw = true;
//=============================================================================
