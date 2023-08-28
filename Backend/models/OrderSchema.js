const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userOrdered: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOfReservation: { type: Date, default: () => Date.now() },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    totalPrice: { type: Number, default: 0 },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
