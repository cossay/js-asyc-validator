const isAlpha = require('validator/lib/isAlpha');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isAlpha(util.toString(value))) {
                return Promise.reject(util.createError(field, message || 'This field must contain only alphabets.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});