const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: {
        type: Number
    },
    frontImage: { type: String, default: 'product.png' },
    brand: { type: String, enum: ['nike', 'adidas', 'vans', 'reebok', 'puma'], required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;