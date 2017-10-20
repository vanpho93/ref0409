const assert = require('assert');
const Post = require('../../src/post');

const User = require('../../src/user');

describe.only('Create post for existed user', () => {
    let idUser;
    beforeEach('Create a user', async () => {
        const user = new User({ name: 'abcd' });
        idUser = user._id;
        await user.save();
    });

    it('Create new post for user', async () => {
        const post = new Post({ content: 'JS Pr' });
        const update = { $push: { posts: post } };
        await post.save();
        await User.findByIdAndUpdate(idUser, update);
        const user = await User.findById(idUser).populate('posts');
        assert.equal(user.posts[0].content, 'JS Pr');
    });
});

