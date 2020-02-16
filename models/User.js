const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema for users 

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true,
    index: { unique: true }
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('User', UserSchema);