const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ data: "Ola Mundo Dockerizado" });
});

module.exports = routes;
