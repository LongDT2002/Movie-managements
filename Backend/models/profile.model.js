const mydb = require('mongoose');

const profileSchema = new mydb.Schema({
    account: {
        type: mydb.Schema.Types.ObjectId,
        ref: 'Account'
    },
    name: { type: String },
    birthday: { type: Date },
    biography: { type: String },
    country: { type: String },
});

module.exports = mydb.model('Profile', profileSchema);
