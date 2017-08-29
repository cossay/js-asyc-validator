const isIP = require('validator/lib/isIP');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && !isIP(value)) {
                return Promise.reject(util.createError(field, message || 'This is not valid IP address.'))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});