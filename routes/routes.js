const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

//Return all notes
router.get("/", async (req, res) => {
  try {
    const note = await Note.find();
    res.json(note);
  } catch (err) {
    res.json({ message: err });
  }
});

//Save note
router.post("/", async (req, res) => {
  const note = new Note({
    name: req.body.name,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
    description: req.body.description,
    image: req.body.image,
    owner: req.body.owner
  });
  try {
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (err) {
    res.json({ message: err });
  }
});

//Return specyfic post
router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    res.json({ message: err });
  }
});

//
//Delete note
router.delete("/:id", async (req, res) => {
  try {
    const removedPost = await Note.remove({ _id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Edit note
router.patch("/:id", async (req, res) => {
  try {
    const editedPost = await Note.updateOne(
      { _id: req.params.id },
      { $set: { content: req.body.content } }
    );
    res.json(editedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
