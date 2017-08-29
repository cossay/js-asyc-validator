const cossay = require('..');

const Validator = cossay.Validator;
const Schema = cossay.Schema;

const schema = new Schema();
const rules = cossay.Rules;

schema.addRule('name', [rules.required(), rules.alpha(), rules.length(4, 'Name must have exactly 4 characters')]);
schema.addRule('name', rules.required());
schema.addRule('email', [rules.required(), rules.email()]);
schema.addRule('phone', [rules.required(), rules.phone(), rules.alphanumeric()]);
schema.addRule('birthdate', [rules.required(), rules.date(), rules.before('22-11-2001'), rules.between('22-10-2001', '22-10-2014')]);
schema.addRule('card', [rules.required(), rules.creditcard()]);
schema.addRule('balance', [rules.required(), rules.decimal()]);
schema.addRule('age', [rules.required(), rules.float(), rules.ip()]);
schema.addRule('location', [rules.required(), rules.ip()]);
schema.addRule('gender', [rules.required(), rules.in(['M', 'F'], 'Gender must be either M or F.')]);

const v = new Validator(schema);
const source = {
    name: 'Agbi.',
    email: 'agbitorcosman@gmail.com',
    phone: '0545277656',
    birthdate: '11-22-2004',
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