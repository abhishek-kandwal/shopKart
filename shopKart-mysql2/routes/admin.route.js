const express = require('express');
const adminController = require('../controller/admin.controller');

const route = express.Router();

route.post('/newitem',adminController.newitem);
route.get('/', adminController.adminpage);

module.exports = route;