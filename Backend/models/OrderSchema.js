const mongoose = require('mongoose');
const Product = require('./productSchema');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Products: [{
        Product: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        size: {
            type: String,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: false,
        default: 0
    },
    shippingAddress: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now },
});


// Calculate the total price based on the sum of products' prices
OrderSchema.pre('save', async function (next) {
    const order = this;
    let totalPrice = 0;

    for (const product of order.Products) {
        const foundProduct = await Product.findById(product.product)
        if (foundProduct) {
            totalPrice += foundProduct.price * product.quantity;
        }
    }

    order.totalPrice = (totalPrice + 10 + (totalPrice * 0.18)).toFixed(2);
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;