// Synchronous Loaders
// https://webpack.js.org/api/loaders/#synchronous-loaders
module.exports = function(content, map, meta) {
  return someSyncOperation(content);
};
