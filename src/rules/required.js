const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            
            if (!util.isEmpty(value)) {
                return Promise.resolve(util.createValue(field, value));
            }

            return Promise.reject(util.createError(field, message || 'This field is required.'));
        };
    }
});