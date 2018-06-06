// Asynchronous Loaders
// https://webpack.js.org/api/loaders/#asynchronous-loaders
// For asynchronous loaders, this.async is used to retrieve the callback function:
//=============================================================================
module.exports = function(content, map, meta) {
  var callback = this.async();
  someAsyncOperation(content, function(err, result) {
    if (err) {
      return callback(err);
    }
    callback(null, result, map, meta);
  });
};
//=============================================================================
