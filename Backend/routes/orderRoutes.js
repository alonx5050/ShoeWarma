const express = require('express');
const router = express.Router();

const orderControllers = require('../controllers/orderControllers.js');

router
    .route('/')
    .get(orderControllers.getAllOrders)
    .post(orderControllers.createOrder);

router
    .route('/:id')
    .get(orderControllers.getOrder)


module.exports = router;


