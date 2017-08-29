function Schema() {

    if (!(this instanceof Schema)) {
        return new Schema();
    }

    this.container = {};
}

/**
 * Adds rules for a given schema field
 * @param {string} field
 * @param {Array<Function>} rules
 * @return {Schema}
 */
Schema.prototype.addRule = function (field, rules) {

    if (!rules || !field) {
        return;
    }

    if (!Array.isArray(rules)) {

        if (!(rules instanceof Function)) {
            return;
        }

        rules = [rules];
    }

    if (!this.container[field]) {
        this.container[field] = [];
    }

    rules.forEach((rule) => this.container[field].push(rule));

    return this;
};

/**
 * Checks if the schema contains a given field
 * @param {string} field
 * @return {boolean}
 */
Schema.prototype.has = function (field) {
    return this.container[field] ? true : false;
};

/**
 * Returns rules for a given schema field
 * @param {string} field
 * @return {Array<Function()>}
 */
Schema.prototype.get = function (field) {
    return this.has(field) ? this.container[field] : null;
};

/**
 * Adds rules for a given schema field
 * @param {string} field
 * @param {Array<Function>} rules
 * @return {Schema}
 */
Schema.prototype.set = function (field, rules) {
    return this.addRule(field, rules);
};

/**
 * Returns schema content
 * @returns {Map<string, Array<Function>>}
 */
Schema.prototype.getRules = function () {
    return this.container;
};

module.exports = Schema;