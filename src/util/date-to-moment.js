const moment = require('moment');
const dateFormats = require('./date-formats');


/**
 * Converts a date to moment
 * @param {string|Date|moment} date 
 * @return {moment|null}
 */
function createMoment(date) {

    if (moment.isMoment(date)) {
        return date;
    }

    if (date instanceof Date) {
        return moment.utc(date);
    }

    for (var index = 0; index < dateFormats.length; index++) {
        var tempMoment = moment.utc(date, dateFormats[index], true);
        if (tempMoment.isValid()) {
            return tempMoment;
        }
    }

    return null;
}

module.exports = createMoment;