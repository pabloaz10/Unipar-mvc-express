const express = require('express');

const route = express.Router();
const livrosController =
  require('../controllers/livrosController');

route.get('/', livrosController.listar);
route.get('/criar', livrosController.criar);
route.post('/', livrosController.inserir);
route.get('/:id/editar', livrosController.editar);
route.post('/:id', livrosController.atualizar);

module.exports = route;