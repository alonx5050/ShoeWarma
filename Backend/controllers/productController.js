const Product = require('../models/ProductSchema.js');


exports.createProduct = async (req, res, next) => {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
}


exports.getAllProducts = async (req, res, next) => {
    const products = await Product.find();
    res.json({
        data: products
    })
};


exports.getProduct = async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json({ product });
}


exports.updateProduct = async (req, res, next) => {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,

    });
    res.status(204).json({
        status: 'success',
        data: product,
    });
};


exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.send('Product Deleted')
}