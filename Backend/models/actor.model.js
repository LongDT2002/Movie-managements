const mydb = require('mongoose');

const actorSchema = new mydb.Schema({
    name: { type: String, required: true},
    birthday: { type: Date },
    deathday: { type: Date, default: null },
    country: { type: mydb.Schema.Types.ObjectId, ref: 'Country' },
    biography: { type: String },
    movie: [{
        type: mydb.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
});

module.exports = mydb.model('Actor', actorSchema);
