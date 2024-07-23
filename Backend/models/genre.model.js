const mydb = require('mongoose');

const genreSchema = new mydb.Schema({
    name: { type: String, required: true }
});

module.exports = mydb.model('Genre', genreSchema);
