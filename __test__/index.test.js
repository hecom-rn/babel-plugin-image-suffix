import pluginTester from 'babel-plugin-tester';
import xxxPlugin from '../index';

pluginTester({
    plugin: xxxPlugin,
    filename:__filename,
    tests: {
        '图片路径转换': {
            fixture: '../__fixture__/javascript.js',
            outputFixture: '../__fixture__/javascript-output.js',
        },
    },
});
