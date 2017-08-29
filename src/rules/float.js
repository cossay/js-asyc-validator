const isFloat = require('validator/lib/isFloat');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isFloat(value)) {
                return Promise.reject(util.createError(field, message || 'This is not valid floating point number.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});