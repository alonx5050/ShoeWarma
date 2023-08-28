const express = require('express');
const productController = require('../controllers/productController')
const router = express.Router();


router.get('/', productController.getAllProducts, (req, res) => {
    const products = res.locals.products; // Retrieve products from res.locals
    res.render('Homepage', { products });
});



router.route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

    
module.exports = router;
