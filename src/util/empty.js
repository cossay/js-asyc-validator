
/**
 * Checks if a value is empty
 * @param {any} value 
 */
function isEmpty(value) {
    if (value === undefined || value === null) {
        return true;
    }

    if (Array.isArray(value) && !value.length) {
        return true;
    }

    if (typeof value === 'string' && !value.length) {
        return true;
    }

    if (typeof value === 'object' && !Object.keys(value).length) {
        return true;
    }

    return false;
}

module.exports = isEmpty;