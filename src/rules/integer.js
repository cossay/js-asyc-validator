const isInt = require('validator/lib/isInt');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isInt(value)) {
                return Promise.reject(util.createError(field, message || 'This is not valid integer.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});