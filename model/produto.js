const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Produto = sequelize.define('Produto', {
  descricao: DataTypes.STRING,
  categoria: DataTypes.STRING,
  valor: DataTypes.FLOAT,
  criado_por: DataTypes.STRING,
}, {
  tableName: 'produto',
  timestamps: false,
});

module.exports = Produto;
