const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  name: String,
  price: String,
  location: String,
  rating: Number,
  description: String,
  image: String,
  owner: String
});

module.exports = mongoose.model("Notes", NoteSchema);
