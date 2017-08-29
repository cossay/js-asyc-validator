const isIn = require('validator/lib/isIn');
const util = require('../util');

module.exports = util.createRule(function () {
    return function (len, message) {
        return function (field, value, source) {
            if (!util.isEmpty(value) && parseInt(len) !== String(value).length) {
                return Promise.reject(util.createError(field, message || `This field must be exactly ${len} characters long.`))
            }

            return Promise.resolve(util.createValue(field, value));
        };
    };
});