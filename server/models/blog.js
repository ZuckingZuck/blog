const mongoose = require("mongoose");

const Blog = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    img: {
        type: String,
        default: "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg",
    },
    likes: {
        type: Array,
    },
    ownerId: {
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Blog", Blog);