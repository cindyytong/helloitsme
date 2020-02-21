// make an Express server
const express = require("express");
const app = express();
// connect to the MongoDB database 
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');

// import routes 
const users = require("./routes/api/users");
const stories = require("./routes/api/stories");
const sections = require("./routes/api/sections");

// parse JSON on frontend 
const bodyParser = require('body-parser')

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// set up middleware for bodyparser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

// routes 
app.get("/", (req, res) => {
  return res.send("Yes World")}
  )
app.use("/api/users", users);
app.use("/api/stories", stories);
app.use("/api/sections", sections); 


// pick port to run server on 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server is running on port ${port}`));

