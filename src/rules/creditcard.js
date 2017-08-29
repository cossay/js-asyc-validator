const isCreditCard = require('validator/lib/isCreditCard');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isCreditCard(util.toString(value))) {
                return Promise.reject(util.createError(field, message || 'This is a valid credit card number.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});