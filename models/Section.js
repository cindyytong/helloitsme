const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 100,
        maxlength: 500
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    story: {
        type: Schema.Types.ObjectId,
        ref: "Story"
    }
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = Section = mongoose.model('Section', SectionSchema);