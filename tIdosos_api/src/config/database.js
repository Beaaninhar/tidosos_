const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tidosos", "12345", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
