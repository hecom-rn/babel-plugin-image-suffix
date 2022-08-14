const test = require("test.png");

const imageTest = require("./image/test.png");

function getTest1() {
  return require("test1@3x.png");
}

function getImageTest1() {
  return require("image/test1@3x.png");
}

class Test {
  test2() {
    const test2 = require("test2@2x.png");

    const imageTest2 = require("image/test2@2x.jpg");
  }
}
