// npm run build
//=============================================================================
import { person, sayHello } from "./lib";
$("#person").html(JSON.stringify(person));

let helloText = sayHello("GameGoGo");
$("#helloText").html(helloText);

let test = () => console.log(123);
test();

// https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
getPosts().then(posts => {
  $("#posts").html(JSON.stringify(posts[0]));
});
//=============================================================================
