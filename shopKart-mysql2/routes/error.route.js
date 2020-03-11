const express = require('express'),
      errorhandler = require('../controller/error.controller');

const route = express.Router();

route.use(errorhandler);

module.exports = route;