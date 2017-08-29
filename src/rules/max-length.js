const util = require('../util');

module.exports = util.createRule(function () {
    return function (maxLength, message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && util.length(value) > maxLength) {
                return Promise.reject(util.createError(field, message || 'This field is too long.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});