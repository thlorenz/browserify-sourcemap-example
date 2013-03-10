'use strict';
console.log('foo line 2');
var bar = require('./wunder/bar');

module.exports = function foo() {
  console.log('hello from foo line 6');
  bar();
};
