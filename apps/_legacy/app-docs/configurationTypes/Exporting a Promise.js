//=============================================================================
// https://webpack.js.org/configuration/configuration-types/#exporting-a-promise
//=============================================================================
module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        entry: "./app.js"
        /* ... */
      });
    }, 5000);
  });
};
//=============================================================================
