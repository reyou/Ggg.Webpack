class SampleES6Class {
  constructor() {
    console.log("constructor called!");
  }
  print() {
    console.log("This (index.js) is the entry point for WebPack by default.");
  }
}

let instance = new SampleES6Class();
instance.print();
