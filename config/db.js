require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelizeConfig = {
  dialect: 'postgres',
  port: process.env.DB_PORT || 5432,
  logging: false,
  replication: {
    read: [
      {
        host: process.env.DB_READ_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    ],
    write: {
      host: process.env.DB_WRITE_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: '-03:00',
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  sequelizeConfig
);

module.exports = sequelize;
