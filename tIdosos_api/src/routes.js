const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ data: "Hello Word! dockerizado DE VERDADE!!!!!" });
});

module.exports = routes;
