const cossay = require('..');

const Validator = cossay.Validator;
const Schema = cossay.Schema;
const Utils = cossay.Utils;

const schema = new Schema();
const rules = cossay.Rules;

schema.addRule('name', [rules.required(), rules.alpha(), rules.length(4, 'Name must have exactly 4 characters')]);
schema.addRule('email', [rules.required(), rules.email()]);
schema.addRule('phone', [rules.required(), rules.phone(), rules.alphanumeric()]);
schema.addRule('birthdate', [rules.required(), rules.date(), rules.between('22-10-2001', '22-10-2014')]);
schema.addRule('card', [rules.required(), rules.creditcard()]);
schema.addRule('balance', [rules.required(), rules.decimal()]);
schema.addRule('age', [rules.required(), rules.integer()]);
schema.addRule('location', [rules.required(), rules.ip()]);
schema.addRule('gender', [rules.required(), rules.in(['M', 'F'], 'Gender must be either M or F.')]);

//Rule to check legal age
var legalAge = Utils.createRule(function () {
    return function (message) {
        return function (field, value, source) {
            if (Utils.isEmpty(value)) {
                return Promise.resolve(Utils.createValue(field, value));
            }

            var ageLimit = 18;

            if (parseInt(value, 10) < ageLimit) {
                return Promise.reject(Utils.createError(field, message || `Legal age limit is ${ageLimit} years.`));
            }

            return Promise.resolve(Utils.createValue(field, value));
        };
    };
});

schema.addRule('age', legalAge());

const v = new Validator(schema);
const source = {
    name: undefined,
    email: 'agbitorcosman@gmail.com',
    phone: '0545277656',
    birthdate: '11-22-2012',
    card: '5105105105105100',
    balance: '56.65',
    age: 32,
    location: '127.0.0.1',
    gender: 'M'
};

v.validate(source).then(function (data) {
    console.log(data);
}).catch(function (errors) {
    console.log(errors);
});