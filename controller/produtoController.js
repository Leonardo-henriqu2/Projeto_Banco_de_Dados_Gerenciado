const produtoService = require('../services/produtoService');

// GET /api/produtos
async function listarProdutos(req, res) {
  try {
    const produtos = await produtoService.buscarTodos();
    res.json(produtos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao listar produtos' });
  }
}

// POST /api/produtos
async function criarProduto(req, res) {
  try {
    const { descricao, categoria, valor, criado_por } = req.body;

    if (!descricao || !categoria || !valor || !criado_por) {
      return res.status(400).json({ erro: 'Dados incompletos' });
    }

    const novoProduto = await produtoService.criar({ descricao, categoria, valor, criado_por });
    res.status(201).json(novoProduto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao criar produto' });
  }
}

module.exports = {
  listarProdutos,
  criarProduto,
};

