const isIn = require('validator/lib/isIn');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (choices, message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isIn(value, choices || [])) {
                return Promise.reject(util.createError(field, message || 'This is not valid choice.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});