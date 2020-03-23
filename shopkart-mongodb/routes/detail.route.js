const express = require('express'),
      detailController = require('../controller/detail.controller');
const route = express.Router();

route.get('/', detailController.detailpage );

route.post('/:id', detailController.detailproduct );

module.exports = route;