const mydb = require('mongoose');

const movieSchema = new mydb.Schema({
    title: { type: String, required: true },
    release_date: { type: Date },
    duration: { type: Number },
    revenue: { type: Number },
    budget: { type: Number },
    summary: { type: String },
    country : { 
        type: mydb.Schema.Types.ObjectId,
        ref: 'Country'
    },
    genre: [{ 
        type: mydb.Schema.Types.ObjectId,
        ref: 'Genre'
    }],
    director: [{ 
        type: mydb.Schema.Types.ObjectId,
        ref: 'Director'
    }],
    actors: [{
        type: mydb.Schema.Types.ObjectId,
        ref: 'Actor'
    }]
});

module.exports = mydb.model('Movie', movieSchema);
