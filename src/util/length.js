const toString = require('./to-string');
/**
 * Finds the length of a given value
 * @param {any} value 
 * @returns {number}
 */
function len(value) {

    if (null === value || undefined === value || typeof value === 'boolean') {
        return 0;
    }

    if (typeof value === 'string' || Array.isArray(value) || value.hasOwnProperty('length')) {
        return parseInt(value.length, 10);
    }

    if (typeof value === 'object') {
        return Object.keys(value).length;
    }

    return toString(value).length;
}

module.exports = len;