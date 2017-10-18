const assert = require('assert');
const User = require('../../src/user');

describe('Remove user', () => {
    let tiId;
    beforeEach('Create 2 users', async () => {
        const ti = new User({ name: 'Ti' });
        const teo = new User({ name: 'Teo' });
        tiId = ti._id;
        // await ti.save();
        // await teo.save();
        await Promise.all([ti.save(), teo.save()]);
    });

    it('Can remove user by id', async () => {
        await User.findByIdAndRemove(tiId);
        const user = await User.findOne({});
        const count = await User.count();
        assert.equal(user.name, 'Teo');
        assert.equal(count, 1);
    });
});

