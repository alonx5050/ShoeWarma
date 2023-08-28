const Order = require('../models/orderSchema.js');
const Product = require('../models/ProductSchema.js');

exports.getAllOrders = async (req, res, next) => {
    const orders = await Order.find()
        .populate('products')
        .populate('userOrdered');

    res.status(200).json({
        status: 'success',
        data: {
            orders,
        },
    });
};

exports.createOrder = async (req, res, next) => {
    const userOrdered = req.user;
    const products = req.body;
    let totalPrice = 0;

    await Promise.all(
        products.map(async product => {
            const pricePerProduct = await Product.findById({ _id: product._id });
            totalPrice += pricePerProduct.price;
        })
    );

    const newOrder = await Order.create({
        userOrdered,
        products,
        totalPrice,
    });

    products.forEach(async product => {
        newOrder.products.push(product._id);
    });

    userOrdered.orders.push(newOrder._id);
    await userOrdered.save();

    res.status(200).json({
        status: 'success',
        data: {
            newOrder,
        },
    });
};

