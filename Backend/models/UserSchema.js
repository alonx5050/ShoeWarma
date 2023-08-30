const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: false },
    email: { type: String, unique: true, required: false },
    password: { type: String, required: false },
    address: { type: String, default: 'no address' },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]

});

const User = mongoose.model('User', userSchema);

module.exports = User;