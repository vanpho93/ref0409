const mongoose = require('mongoose');
const CarSchema = require('./car');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    cars: [CarSchema],
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
