import foo from './foo.js';
import { version } from '../package.json';
import _ from 'lodash'
import answer from 'the-answer';

console.log('the answer is ' + answer);

console.log(_.cloneDeep(foo));
export default function () {
  console.log(foo);
  console.log("version", version);
  console.log('the answer is ' + answer);
}