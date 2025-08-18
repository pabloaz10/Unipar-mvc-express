const express = require('express');

const route = express.Router();
const livrosController =
  require('../controllers/livrosController');

route.get('/', livrosController.listar);

module.exports = route;