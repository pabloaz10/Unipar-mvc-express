const express = require('express');

const route = express.Router();
const livrosController =
  require('../controllers/livrosController');

route.get('/', livrosController.listar);
<<<<<<< HEAD
route.get('/criar', livrosController.criar);
route.post('/', livrosController.inserir);
route.get('/:id/editar', livrosController.editar);
=======
route.get('/:id/editar', livrosController.editar);
route.get('/criar', livrosController.criar);
route.post('/', livrosController.inserir);
>>>>>>> b753ad3b4af17f0cf6f08b30858b4e085762dd8a
route.post('/:id', livrosController.atualizar);

module.exports = route;