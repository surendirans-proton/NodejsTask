const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    catKey: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
})

const Categories = mongoose.model('category', schema);
module.exports = Categories;