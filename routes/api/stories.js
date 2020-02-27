const express = require("express");
const router = express.Router();
const passport = require("passport");

const Story = require('../../models/Story');
const validateStoryInput = require('../../validation/stories');

// test will be nested under users i.e. /api/stories
router.get("/test", (req, res) => res.json({ msg: "This is the stories route" }));


// all stories 
router.get("/", (req, res) => {
  Story.find()
    .populate("creator", "handle")
    .sort({ date: -1 })
    .then(stories => res.json(stories))
    .catch(err => res.status(404).json({ nostoriesfound: "No stories found" }));
});

// stories for a specific ueser 

router.get("/creator/:creator_id", (req, res) => {
  Story.find({ creator: req.params.creator_id })
    .then(stories => res.json(stories))
    .catch(err =>
      res.status(404).json({ nostoriesfound: "No stories found from that creator" })
    );
});

// story by story id 
router.get("/:id", (req, res) => {
  Story.findById(req.params.id)
    .populate("creator")
    .then(story => res.json(story))
    .catch(err =>
      res.status(404).json({ nostoryfound: "No story found with that ID" })
    );
});

// edit a story you are the creator for 
// router.put("/:id", (req, res) => {
//   console.log(req)
//   Story.findById(req.params.id)
//     .then(
//       story => {
//         res.json(story);})
//     .catch(err =>
//       res.status(404).json({ nostoryfound: "No story found with that ID" })
//     );
// })

// make a story (protected)
router.post(
  "/",
  passport.authenticate("jwt", { session: false }), // middleware which checks there is a current user 
  (req, res) => {
    const { errors, isValid } = validateStoryInput(req.body); // validate inpute
 
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newStory = new Story({
      title: req.body.title,
      creator: req.user.id
    });
 
    return newStory.save().then(story => res.json(story));
  }
);





module.exports = router;