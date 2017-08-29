const createError = require('./error');
const createValue = require('./value');

/**
 * Creates a new validation rule
 * @param {Function} callback 
 * @return {Function}
 */
function createRule(callback) {
    return function (field, value, source) {
        if (!(callback instanceof Function)) {
            callback = function () {
                return function (field, value, source) {
                    return value ? Promise.resolve(createValue(field, value)) : Promise.reject(createError(field, 'This value must empty.'));
                };
            }
        }

        return callback().call(null, ...arguments);
    }
}

module.exports = createRule;