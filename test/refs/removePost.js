const assert = require('assert');
const Post = require('../../src/post');
const User = require('../../src/user');

describe.only('Remove post for existed user', () => {
    let idPost1;
    let idUser;
    beforeEach('Create a user with 2 posts', async () => {
        const post1 = new Post({ content: 'MEAN' });
        idPost1 = post1._id;
        const post2 = new Post({ content: 'MEAN 2' });
        const user = new User({ 
            name: 'abcd', 
            posts: [post1, post2] 
        });
        idUser = user._id;
        await post1.save();
        await post2.save();
        await user.save();
    });

    it('Remove post by id', async () => {
        await Post.findByIdAndRemove(idPost1);
        const user = await User.findById(idUser).populate('posts');
        assert.equal(user.posts[0].content, 'MEAN 2');
    });
});
