const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema for users 

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true,
    maxlength: 30,
    index: { unique: true }
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
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
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
  sections: [{ type: Schema.Types.ObjectId, ref: "Sections" }]
});

module.exports = User = mongoose.model('users', UserSchema);
// why does this need to be 'users'? 