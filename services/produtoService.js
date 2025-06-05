const Produto = require('../model/produto');

// Criação manual via API
async function criar(data) {
  return await Produto.create(data);
}

// Criação com leitura dos 10 anteriores (usado no setInterval)
async function criarProdutoComLeitura() {
  const produto = await Produto.create({
    descricao: `Produto ${Math.floor(Math.random() * 10000)}`,
    categoria: 'Teste',
    valor: 100.0,
    criado_por: 'Grupo PI : Onlivros',
  });

  const produtosAnteriores = [];

  for (let i = produto.id - 1; i > produto.id - 11; i--) {
    const anterior = await Produto.findOne({ where: { id: i } });
    if (anterior) produtosAnteriores.push(anterior);
  }

  return { produto, produtosAnteriores };
}

// Buscar todos os produtos
async function buscarTodos() {
  return await Produto.findAll({ order: [['id', 'DESC']] });
}

module.exports = {
  criar,
  buscarTodos,
  criarProdutoComLeitura,
};

