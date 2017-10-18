const assert = require('assert');
const User = require('../../src/user');

describe('Create user', () => {
    it('Can create user', async () => {
        const user = new User({ name: 'Pho' });
        await user.save();
        const user2 = await User.findById(user._id);
        assert.equal(user2.name, 'Pho');
    });
});

