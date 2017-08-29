const isEmpty = require('./empty');

/**
 * Converts a value to string
 * @param {any} value 
 */
function toString(value) {

    if (isEmpty(value)) {
        return '';
    }

    if (value.toString && value.toString instanceof Function) {
        return value.toString();
    }

    return JSON.stringify(value);
}

module.exports = toString;