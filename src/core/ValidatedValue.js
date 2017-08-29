/**
 * Object representing a successfully validated field
 * @constructor
 * @param {string} field 
 * @param {any} value 
 */
function ValidatedField(field, value) {

    if (!(this instanceof ValidatedField)) {
        return new ValidatedField(field, value)
    }

    this.field = field;
    this.value = value;
}

/**
 * Returns field for this value
 * @return {string}
 */
ValidatedField.prototype.getField = function () {
    return this.field;
};

/**
 * Sets field for this value
 * @params {string} field
 * @return {ValidatedField}
 */
ValidatedField.prototype.setField = function (field) {
    this.field = field;

    return this;
};

/**
 * Returns value for this field
 * @return {any}
 */
ValidatedField.prototype.getValue = function () {
    return this.value;
};

/**
 * Sets value for this field
 * @params {any} value
 * @return {ValidatedField}
 */
ValidatedField.prototype.setValue = function (value) {
    this.value = value;

    return this;
};

module.exports = ValidatedField;