const {Sequelize} = require('sequelize');

require("dotenv").config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: "localhost",
    dialect: "mysql",
    logging: () => {}
  }
);

db.sync();

module.exports = db;