const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    summary: {
        type: String
    },
    content: {
        type: String
    },
    time: {
        type: String
    },
    cover: {
        type: String
    },
}, {
    timestamps: true
})

const PostModel = mongoose.model('Post', PostSchema)

module.exports = PostModel