const isDecimal = require('validator/lib/isDecimal');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isDecimal(value)) {
                return Promise.reject(util.createError(field, message || 'This is not valid decimal number.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});