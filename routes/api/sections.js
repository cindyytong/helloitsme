const express = require("express");
const router = express.Router();

// test will be nested under users i.e. /api/users/test
router.get("/test", (req, res) => res.json({ msg: "This is the sections route" }));

module.exports = router;
