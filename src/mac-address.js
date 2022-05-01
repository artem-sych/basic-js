const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac) {
  let arrMac = mac.split('').filter(el => {
    return el !== '-';
  });

  if (arrMac.length !== 12) {
    return false;
  }

  function isAdress(el) {
    if (el === '0' || el === '1' || el === '2' || el === '3' || el === '4' || el === '5' ||
      el === '6' || el === '7' || el === '8' || el === '9' || el === '0' || el === 'A' ||
      el === 'A' || el === 'B' || el === 'C' || el === 'D' || el === 'E' || el === 'F') {
      return true;
    }
  }
  return arrMac.every(isAdress);
}
module.exports = {
  isMAC48Address
};