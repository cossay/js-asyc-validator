const Schema = require('./Schema');
const ValidationError = require('./ValidationError');

/**
 * Validator constructor
 * @constructor
 * @param {Schema} schema 
 */
function Validator(schema) {
    if (!(this instanceof Validator)) {
        return new Validator(schema);
    }

    this.schema = schema;
}

/**
 * Validates a given data against provider schema
 * @param {Map<string, any>} data
 */
Validator.prototype.validate = function (data) {
    return new Promise((resolve, reject) => {
        data = data || {};
        var violations = {};
        var compilePromises = [];

        function catchHandler(error) {
            if (error instanceof ValidationError) {
                var errorField = error.getField();
                if (!violations[errorField]) {
                    violations[errorField] = [];
                }
                violations[errorField].push(error.getMessage());
            }
        }

        Object.keys(this.schema.getRules()).forEach((field) => {
            var rules = this.schema.get(field);
            if (rules.length) {
                rules.forEach((rule) => {
                    var promise = rule(field, String(data[field]), data);
                    if (promise instanceof Promise) {
                        compilePromises.push(promise.catch(catchHandler));
                    }
                });
            }
        });

        return Promise.all(compilePromises).then(function () {
            return Object.keys(violations).length ? reject(violations) : resolve(data);
        }).catch(function (errors) {
            return reject(errors);
        });
    });
};

module.exports = Validator;