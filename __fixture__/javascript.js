const test = require('test.png');
const imageTest = require('./image/test.png')

function getTest1(){
    return require('test1.png');
}
function getImageTest1(){
    return require('./image/test1.png');
}

class Test {
    test2(){
        const test2 = require('test2.png');
        const imageTest2 = require('./image/test2.jpg');
    }
}
