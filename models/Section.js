const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 100,
        maxlength: 500
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    story: {
        type: Schema.Types.ObjectId,
        ref: "Story"
    }
});

module.exports = Section = mongoose.model('Section', SectionSchema);