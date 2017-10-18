const assert = require('assert');
const User = require('../../src/user');

describe('Test sub document', () => {
    it('Can create user with cars', async () => {
        const user = new User({
            name: 'Pho',
            cars: [
                { branch: 'Toyota', color: 'black' },
                { branch: 'Merc', color: 'white' }
            ]
        });
        await user.save();
        const user2 = await User.findById(user._id);
        assert.equal(user2.name, 'Pho');
        console.log(user2);
    });

    xit('Can add new car for user', async () => {
        
    });

    xit('Can add update a car', async () => {
        
    });

    xit('Can add remove car by id', async () => {
        
    });
});
