const util = require('../util');

module.exports = util.createRule(function () {
    const regexp = /^[+]?([\d]{0,3})?[\(\.\-\s]?(([\d]{1,3})[\)\.\-\s]*)?(([\d]{3,5})[\.\-\s]?([\d]{4})|([\d]{2}[\.\-\s]?){4})$/;
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !regexp.test(util.toString(value))) {
                return Promise.reject(util.createError(field, message || 'This is not a valid phone number.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});