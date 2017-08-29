const util = require('../util');

module.exports = util.createRule(function () {
    return function (minLength, message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && util.length(value) < minLength) {
                return Promise.reject(util.createError(field, message || 'This field is too short.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});