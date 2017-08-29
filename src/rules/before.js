const util = require('../util');

module.exports = util.createRule(function () {
    return function (date, message) {
        return function (field, value, source) {
            
            var beforeDate = util.createDate(date);

            if (null == beforeDate) {
                return Promise.reject(util.createError(field, `"${date}" is not a valid date.`));
            }

            if (!util.isEmpty(value) && util.isDate(value) && beforeDate.isBefore(util.createDate(value))) {
                return Promise.reject(util.createError(field, message || `This field must be a date before ${beforeDate.format('YYYY-MM-DD')}.`))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});