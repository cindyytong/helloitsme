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
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
  sections: [{ type: Schema.Types.ObjectId, ref: "Section" }]
},
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }}
);

module.exports = User = mongoose.model('User', UserSchema);
