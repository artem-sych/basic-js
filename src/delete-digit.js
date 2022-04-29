const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('');
  let max = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    array.splice(array.indexOf(array[i]), 1);
    sum = array.reduce(function (sum, elem) {
      return sum + elem;
    });
    if (sum > max) {
      max = sum;
    }
    array = n.toString().split('');
  }
  return +max;
}

module.exports = {
  deleteDigit
};