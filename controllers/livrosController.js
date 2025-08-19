const DB = require('../models/livros');

const livrosController = {
  listar: async (req, res) => {
    const todosLivros = await DB.getAll();
    res.render('livros/listar', { livros: todosLivros });
  },
  criar: async (req, res) => {
    res.render('livros/criar');
  }, 
  inserir: async (req, res) => {
    const novoLivro = {
      titulo: req.body.titulo,  
      autor: req.body.autor
    };
    await DB.add(novoLivro);
    res.redirect('/livros');
  },
  editar: async (req, res) => {
    const id = req.params.id;
    const livroAtualizado = await DB.getById(id);
    res.render('livros/editar', { livro: livroAtualizado });
  },
  atualizar: async (req, res) => {
    const id = req.params.id;
    const livroAtualizado = {
      titulo: req.body.titulo,
      autor: req.body.autor
    };
    await DB.update(id, livroAtualizado);
    res.redirect('/livros');
  }
};


module.exports = livrosController;
