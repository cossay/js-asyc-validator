const util = require('../util');

module.exports = util.createRule(function () {

    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !util.isDate(value)) {
                return Promise.reject(util.createError(field, message || 'This is not a valid date.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});