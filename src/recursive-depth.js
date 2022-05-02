const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxNumber = 0;
    for (let subArr of arr) {
      if (Array.isArray(subArr)) {

        maxNumber = Math.max(this.calculateDepth(subArr), maxNumber);

      }
    }
    return 1 + maxNumber;
  }
}

module.exports = {
  DepthCalculator
};