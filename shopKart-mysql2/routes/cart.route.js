const express = require('express');
const cartController = require('../controller/cart.controller');

const route = express.Router();

route.get('/', cartController.empty);

route.post('/remove/:product_id', cartController.removeitem);

route.post('/addmore/:product_id', cartController.addmore);

route.post('/submore/:product_id', cartController.submore);

route.post('/:product_id', cartController.additem);

module.exports = route;

