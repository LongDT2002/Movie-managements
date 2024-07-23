const mydb = require('mongoose');

const accountSchema = new mydb.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mydb.model('Account', accountSchema);
