const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {


  if (date.toString !== Date.prototype.toString) {
    throw new Error("Invalid date!");
  }
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  let month = date.getMonth() + 1;
  switch (true) {
    case month >= 9 && month <= 11:
      return "autumn";
    case month >= 3 && month <= 5:
      return "spring";
    case month >= 6 && month <= 8:
      return "summer";
    default:
      return "winter";
  }
}

module.exports = {
  getSeason
};