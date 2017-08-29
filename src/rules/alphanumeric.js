const isAlphanumeric = require('validator/lib/isAlphanumeric');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isAlphanumeric(util.toString(value))) {
                return Promise.reject(util.createError(field, message || 'This field must contain only alphabets and numbers.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});