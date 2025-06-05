require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
const produtoRoutes = require('./routes/produtoRoutes');
const { criarProdutoComLeitura } = require('./services/produtoService');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', produtoRoutes);

sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados.'))
  .catch(err => console.error('Erro de conexão:', err));

// Inserção automática a cada 1 segundo
setInterval(async () => {
  try {
    const { produto } = await criarProdutoComLeitura();
    console.log(`Produto inserido automaticamente: ${produto.id}`);
  } catch (err) {
    console.error('Erro na inserção automática:', err);
  }
}, 1000);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
