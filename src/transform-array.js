const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let subArr = arr.slice();
  let arrResult = [];
  subArr.forEach((el, index) => {
    switch (el) {
      case '--double-next':
        arrResult.push(subArr[index + 1]);
        break;
      case '--double-prev':
        arrResult.push(subArr[index - 1]);
        break;
      case '--discard-next':
        subArr.splice(index + 1, 1);
        break;
      case '--discard-prev':
        arrResult.splice([index - 2], 1);
        break;
      default:
        arrResult.push(el);
    }
  });
  return arrResult;
}

module.exports = {
  transform
};