const livros = require('../models/livros');

const livrosController = {
  listar: (req, res) => {
    const todosLivros = livros.getAll();
    res.render('livros/listar', { livros: todosLivros });
  },
};

module.exports = livrosController;
