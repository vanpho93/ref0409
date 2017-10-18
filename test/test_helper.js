require('../src/db');
const User = require('../src/user');
const Post = require('../src/Post');

beforeEach('Remove all data', async() => {
    await User.remove({});
    await Post.remove({});
});
