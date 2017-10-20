const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: { type: String }
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;
