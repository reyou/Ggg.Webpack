import _ from "lodash";

function component() {
  var element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(
    ["Hello", "webpack", "https://webpack.js.org/guides/getting-started/"],
    " "
  );

  return element;
}

document.body.appendChild(component());
