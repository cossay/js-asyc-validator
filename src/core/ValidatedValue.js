/**
 * Object representing a successfully validated field
 * @constructor
 * @param {string} name 
 * @param {any} value 
 */
function ValidatedField(name, value) {

    if (!(this instanceof ValidatedField)) {
        return new ValidatedField(name, value)
    }

    this.name = name;
    this.value = value;
}

/**
 * Returns name for this field
 * @return {string}
 */
ValidatedField.prototype.getName = function () {
    return this.name;
};

/**
 * Sets name for this field
 * @params {string} name
 * @return {ValidatedField}
 */
ValidatedField.prototype.setName = function (name) {
    this.name = name;

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