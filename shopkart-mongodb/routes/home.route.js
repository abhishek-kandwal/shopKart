const express = require('express');
const homeController = require('../controller/home.controller');

const route = express.Router();

route.get('/', homeController);

module.exports = route;