const createMoment = require('./date-to-moment');

/**
 * Check if a given value is a valid date
 * @param {any} date 
 */
function isValidDate(date) {
    return null !== createMoment(date);
}

module.exports = isValidDate;