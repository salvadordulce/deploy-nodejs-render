let contatos = [];

const criarContato = (nome, sobrenome, email) => {
  const novoContato = { nome, sobrenome, email };
  contatos.push(novoContato);
};

const listarContatos = () => {
  return contatos;
};

module.exports = { criarContato, listarContatos };
