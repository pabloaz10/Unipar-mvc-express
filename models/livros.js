<<<<<<< HEAD
const DB = require('../db');
=======
const DB = require("../db");
>>>>>>> b753ad3b4af17f0cf6f08b30858b4e085762dd8a

const livroModel = {
  getAll: async () => {
    const response = await DB.get('/livros');
    return response.data;
  },

  getById: async (id) => {
    const response = await DB.get(`/livros/${id}`);
    return response.data;
  },

  add: async (novoLivro) => {
    const response = await DB.post('/livros', novoLivro);
    return response.data;
  },

  update: async (id, livroAtualizado) => {
    const response = await DB.put(`/livros/${id}`, livroAtualizado);
    return response.data;
  }
<<<<<<< HEAD
};
=======
>>>>>>> b753ad3b4af17f0cf6f08b30858b4e085762dd8a

};

module.exports = livroModel;