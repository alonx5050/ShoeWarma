const Order = require('../models/OrderSchema.js');


exports.createOrder = async (req, res, next) => {
    const newOrder = await Order.create(req.body);
    res.json(newOrder);
}


exports.getAllOrders = async (req, res, next) => {
    const orders = await Order.find();
    res.json({
        data: orders
    })
};


exports.getOrder = async (req, res, next) => {
    const id = req.params.id;
    const order = await Order.findById(id);
    res.json({ order });
}


exports.updateOrder = async (req, res, next) => {
    const id = req.params.id;
    const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,

    });
    res.status(204).json({
        status: 'success',
        data: order,
    });
};


exports.deleteOrder = async (req, res, next) => {
    const id = req.params.id;
    await Order.findByIdAndDelete(id);
    res.send('Order Deleted')
}