const contatoModel = require('../models/contato.model');

// Exibe o formulário para criar um novo contato
const exibirFormulario = (req, res) => {
  res.render('contatos/novo');
};

// Cria um novo contato
const criarContato = async (req, res) => {
  const { nome, sobrenome, email } = req.body;
  await contatoModel.criarContato(nome, sobrenome, email);
  res.redirect('/');
};

// Lista os contatos
const listarContatos = async (req, res) => {
  const contatos = await contatoModel.listarContatos();
   res.render('contatos/listar', { contatos });
};

module.exports = { exibirFormulario, criarContato, listarContatos };
