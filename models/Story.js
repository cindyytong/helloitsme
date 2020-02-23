const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StorySchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 155
    },
    date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Story = mongoose.model('story', StorySchema);

module.exports = Story;