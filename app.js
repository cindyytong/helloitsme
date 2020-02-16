// make an Express server
const express = require("express");
const app = express();
// connect to the MongoDB server 
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// routes 
app.get("/", (req, res) => res.send("Yes World"))

// pick port to run server on 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server is running on port ${port}`));

