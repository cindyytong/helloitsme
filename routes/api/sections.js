const express = require("express");
const router = express.Router();
const passport = require("passport");

const Section = require("../../models/Section");

const validateSectionInput = require('../../validation/sections');

router.get("/test", (req, res) => res.json({ msg: "This is the sections route" }));

// all sections 
router.get("/", (req, res) => {
  Section.find()
    .populate("author", "handle")
    .populate("story")
    .sort({ created_at: -1 })
    .then(sections => res.json(sections))
    .catch(err => res.status(404).json({ nosectionsfound: "No sections found" }));
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }), 
  (req, res) => {
    const { errors, isValid } = validateSectionInput(req.body); // validate input
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newSection = new Section({
      text: req.body.text,
      author: req.body.author,
      story: req.body.story
    });
    return newSection.save().then(section => {

      return res.json(section);
    });
  }
);


module.exports = router;
