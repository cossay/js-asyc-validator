const isEmail = require('validator/lib/isEmail');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isEmail(util.toString(value))) {
                return Promise.reject(util.createError(field, message || 'This is not a valid email address.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});