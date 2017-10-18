const mongoose = require('mongoose');
const CarSchema = require('./car');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    cars: [CarSchema]
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
