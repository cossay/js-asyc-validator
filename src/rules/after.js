const util = require('../util');

module.exports = util.createRule(function () {
    return function (date, message) {

        return function (field, value, source) {
            var beforeDate = util.createDate(new Date());

            if (null == beforeDate) {
                return Promise.reject(util.createError(field, `"${date}" is not a valid date.`));
            }

            if (!util.isEmpty(value) && util.isDate(value) && !beforeDate.isBefore(util.createDate(value))) {
                return Promise.reject(util.createError(field, message || `This value must be a date after ${beforeDate.format('YYYY-MM-DD')}.`))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});