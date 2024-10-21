const pool = require("../config/database");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let contatos = [];

const criarContato = async (nome, sobrenome, email) => {
  const novocontato = await prisma.contatos.create({
    data: {
      nome: nome,
      sobrenome: sobrenome,
      email: email
    }
  });


  return novocontato;
};

const listarContatos = async () => {
  const buscarcontatos = await prisma.contatos.findMany();
  return buscarcontatos;
};

module.exports = { criarContato, listarContatos };
