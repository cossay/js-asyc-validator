/**
 * Object representing a validation error
 * @constructor
 * @param {string} field 
 * @param {string} error 
 */
function ValidationError(field, error) {

    if (!(this instanceof ValidationError)) {
        return new ValidationError(field, error);
    }

    this.field = field;

    this.error = error;
}

/**
 * Returns field name for this error
 * @return {string}
 */
ValidationError.prototype.getField = function () {
    return this.field;
};

/**
 * Sets field name for this error
 * @params {string} field
 * @returns {ValidationError}
 */
ValidationError.prototype.setField = function (field) {
    this.field = field;

    return this;
};

/**
 * Returns message for this error
 * @return {string}
 */
ValidationError.prototype.getMessage = function () {
    return this.error;
};

/**
 * Sets message for this error
 * @params {string} message
 * @returns {ValidationError}
 */
ValidationError.prototype.setMessage = function (message) {
    this.error = message;

    return this;
};

module.exports = ValidationError;