const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController.js');

router.route('/')
    .get(orderController.createOrder)
    .post(orderController.createOrder);


router
    .route('/:id')
    .get(orderController.getOrder)


module.exports = router;


