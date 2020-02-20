const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  content: String
});

module.exports = mongoose.model("Notes", NoteSchema);
