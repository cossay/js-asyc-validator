const Schema = require('./Schema');
const ValidationError = require('./ValidationError');
const ValidatedValue = require('./ValidatedValue');

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
 * Validates a given data against provided schema
 * @param {Map<string, any>} data
 */
Validator.prototype.validate = function (data) {
    return new Promise((resolve, reject) => {
        data = data || {};
        var violations = {};
        var compiledPromises = [];
        var validatedData = {};

        function catchHandler(error) {
            if (error instanceof ValidationError) {
                var errorField = error.getField();
                if (!violations[errorField]) {
                    violations[errorField] = [];
                }
                violations[errorField].push(error.getMessage());
            }
        }

        function thenHandler(value) {
            if (value instanceof ValidatedValue) {
                validatedData[value.getField()] = value.getValue();
            }
        }

        Object.keys(this.schema.getRules()).forEach((field) => {
            var rules = this.schema.get(field);
            if (rules.length) {
                rules.forEach((rule) => {
                    var promise = rule(field, data[field], data);
                    if (promise instanceof Promise) {
                        compiledPromises.push(promise.catch(catchHandler).then(thenHandler));
                    }
                });
            }
        });

        return Promise.all(compiledPromises).then(function (i) {
            return Object.keys(violations).length ? reject(violations) : resolve(validatedData);
        }).catch(function (errors) {
            return reject(errors);
        });
    });
};

module.exports = Validator;