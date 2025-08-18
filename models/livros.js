// Usando um array em memória como nosso "banco de dados"
const livros = [
  { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
  { id: 2, titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
];
let proximoId = 3;

const livroModel = {
  getAll: () => livros,

  getById: (id) => livros.find(livro => livro.id === id),

  add: (novoLivro) => {
    const livroParaAdicionar = { id: proximoId++, ...novoLivro };
    livros.push(livroParaAdicionar);
    return livroParaAdicionar;
  }
 };

  module.exports = livroModel;