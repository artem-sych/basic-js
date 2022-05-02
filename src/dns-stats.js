const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domainsArr) {
  let domains = {};
  let arrLink = domainsArr.map(subArr => subArr.split('.').reverse());
  arrLink.forEach(subArr => {
    let str = '';
    subArr.forEach(el => {
      str = str + '.' + el;
      domains.hasOwnProperty(str) ? domains[str]++ : domains[str] = 1;
    });
  });
  return domains;
}

module.exports = {
  getDNSStats
};
