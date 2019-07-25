'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var foo = {
  message: 'hello world'
};

var version = "1.0.0";

var index = 42;

console.log('the answer is ' + index);

console.log(_.cloneDeep(foo));
function main () {
  console.log(foo);
  console.log("version", version);
  console.log('the answer is ' + index);
}

module.exports = main;
