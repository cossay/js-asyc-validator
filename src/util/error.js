const ValidationError = require('../core/ValidationError');

/**
 * Creates a validation error
 * @param {string} field 
 * @param {string} message 
 * @returns {ValidationError}
 */
function createError(field, message) {
    return new ValidationError(field, message);
}

module.exports = createError;