const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand:{ type: String, required: true, enum: ['Nike', 'Adidas', 'Vans', 'Reebok', 'Puma']},
    color:{ type: String, required: true, enum: ['Black', 'Blue', 'Green', 'Red', 'Yellow']},
    size:{ type: Number, required: true, enum: [38,39,40,41,42,43,44]},
    price: { type: Number, required: true },
    frontImage: { type: String, required: true, default: 'product.jpg'},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;