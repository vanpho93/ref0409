const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    branch: { type: String },
    color: { type: String }
});

module.exports = CarSchema;
