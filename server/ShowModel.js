const mongoose = require("mongoose");

// The document schema should have 3 things
// A "showName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here Genre, Adult, score, runtime, monetization type

const TVShowSchema = new mongoose.Schema({
  showName: {
    type: String,
    required: true,
  },
  score: {
    //would this example then be considered String type 08/08/08
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  adult: {
    //should it be a boolean value or string type?
    type: String,
    required: true,
  },
  runTime: {
    type: String,
    required: true,
  },
  monetization: {
    type: String,
    required: true,
  },
});

//create a student model, well export this using the schema previously created.
const ShowSchema = mongoose.model("TVShow", TVShowSchema);
// You must export your model through module.exports
// The collection name should be 'student'
module.exports = ShowSchema;
