'use strict';

require('lodash');

const  message = "message";

var version = "1.0.0";

var index = 42;

console.log('the answer is ' + index);

// console.log(_.cloneDeep(message));
var main = {
  message,
  answer: index,
  version
};

module.exports = main;
