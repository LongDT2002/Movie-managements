const mydb = require("mongoose");

const countrySchema = new mydb.Schema({
    name: { type: String, required: true }
});

module.exports = mydb.model("Country", countrySchema);
