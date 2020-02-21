const express = require("express");
const router = express.Router();
const passport = require("passport");

const Story = require('../../models/Story');
const validateStoryInput = require('../../validation/stories');

// test will be nested under users i.e. /api/users/test
router.get("/test", (req, res) => res.json({ msg: "This is the stories route" }));

router.post("/", 
    // use passport as middleware to check there is user, adds the bearer to the req 
    passport.authenticate("jwt", { session: false }),
    // validate story 
    (req, res) => {
        const { isValid, errors } = validateStoryInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        // make the new story 
        const newStory = new Story({
            creator: req.creator.id,
            title: req.title
        });

        // save story and send back response 
        newStory
            .save()
            .then(tweet => res.json(tweet));

})
module.exports = router;
