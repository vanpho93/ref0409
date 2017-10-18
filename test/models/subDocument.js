const assert = require('assert');
const User = require('../../src/user');

describe('Test sub document', () => {
    let userId;
    let toyotaId;
    beforeEach('Create a user for test', async () => {
        const user = new User({
            name: 'Teo',
            cars: [
                { branch: 'Toyota', color: 'black' },
                { branch: 'Merc', color: 'white' }
            ]
        });
        userId = user._id;
        toyotaId = user.cars[0]._id;
        await user.save();
    });

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
    });

    it('Can add new car for user', async () => {
        const user = await User.findById(userId);
        user.cars.push({ branch: 'Madza', color: 'red' });
        await user.save();
        const user2 = await User.findById(userId);
        assert.equal(user2.cars.length, 3);
        assert.equal(user2.cars[2].branch, 'Madza');
    });

    it('Can add new by $push', async () => {
        const update = { 
            $push: { 
                cars: { branch: 'Madza', color: 'red' } 
            }
        };
        await User.findByIdAndUpdate(userId, update);
        const user2 = await User.findById(userId);
        assert.equal(user2.cars.length, 3);
        assert.equal(user2.cars[2].branch, 'Madza');
    });

    it('Can add update a car', async () => {
        const user = await User.findById(userId);
        const toyotaCar = user.cars.find(car => car._id.toString() === toyotaId.toString());
        toyotaCar.update({ color: 'Blue' });
        await user.save();
        const user2 = await User.findById(userId);
        console.log(user2);
    });

    it('Can remove car by id', async () => {
        const user = await User.findById(userId);
        user.cars.remove(toyotaId);
        await user.save();
        const user2 = await User.findById(userId);
        assert.equal(user2.cars[0].branch, 'Merc');
        assert.equal(user2.cars.length, 1);
    });

    it('Can remove car by id with $pull', async () => {
        const user = await User.findByIdAndUpdate(userId, {
            $pull: { cars: { _id: toyotaId } }
        });
        const user2 = await User.findById(userId);
        assert.equal(user2.cars[0].branch, 'Merc');
        assert.equal(user2.cars.length, 1);
    });
});
