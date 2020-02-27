const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 155
    },
    intro: {
      type: String,
      required: true,
      minlength: 150
    },
    image: {
      type: String,
      required: true,
      minlength: 1
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    authors: [{ type: Schema.Types.ObjectId, ref: "User" }],
    sections: [{ type: Schema.Types.ObjectId, ref: "Section" }]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Story = mongoose.model('Story', StorySchema);

module.exports = Story;