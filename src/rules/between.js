const util = require('../util');

module.exports = util.createRule(function () {
    return function (minDate, maxDate, message) {
        return function (field, value, source) {
            var minMoment = util.createDate(minDate);
            var maxMoment = util.createDate(maxDate);

            if (null == minMoment) {
                return Promise.reject(util.createError(field, `"${minDate}" is not a valid date.`));
            }

            if (null == maxMoment) {
                return Promise.reject(util.createError(field, `"${maxDate}" is not a valid date.`));
            }

            if (!util.isEmpty(value) && util.isDate(value) && !util.createDate(value).isBetween(minMoment, maxMoment)) {
                var fmt = 'YYYY-MM-DD';
                return Promise.reject(util.createError(field, message || `This value must be a date between ${minMoment.format(fmt)} and ${maxMoment.format(fmt)}.`))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});