const express = require("express");
const sequelize = require("./config/database");

const routes = express.Router();

routes.get("/home", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    res.send(`Olá, mundo!`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    console.log("Acabou");
  }
});

routes.get("/produtos", (req, res) => {
  res.send(`Olá, produtos!`);
});

routes.post("/home", (req, res) => {
  res.send(`Olá, mundo! (post)`);
});

module.exports = routes;
