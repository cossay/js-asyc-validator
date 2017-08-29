const ValidatedValue = require('../core/ValidatedValue');
/**
 * Creates a validation value
 * @param {string} field 
 * @param {any} value 
 * @return {ValidatedValue}
 */
function createValue(field, value) {
    return new ValidatedValue(field, value);
}

module.exports = createValue;