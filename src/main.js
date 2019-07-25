import { message } from './foo.js';
import { version } from '../package.json';
import _ from 'lodash'
import answer from 'the-answer';

console.log('the answer is ' + answer);

// console.log(_.cloneDeep(message));
export default {
  message,
  answer,
  version
}