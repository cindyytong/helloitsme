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




module.exports = router;
