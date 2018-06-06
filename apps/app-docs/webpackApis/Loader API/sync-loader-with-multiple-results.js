// https://webpack.js.org/api/loaders/#synchronous-loaders
module.exports = function(content, map, meta) {
  this.callback(null, someSyncOperation(content), sourceMaps, meta);
  return; // always return undefined when calling callback()
};
