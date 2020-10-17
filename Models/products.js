const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Products = mongoose.model('products', schema);
module.exports = Products;