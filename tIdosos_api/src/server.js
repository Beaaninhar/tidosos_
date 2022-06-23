const morganBody = require("morgan-body");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const moment = require("moment");

const app = express();

app.use(bodyParser.json());

// *** Configuração do log
const log = fs.createWriteStream(
  path.join(
    __dirname,
    "./logs",
    `server.js-${moment().format("YYYY-MM-DD")}.log`
  ),
  { flags: "a" }
);

morganBody(app, {
  noColors: true,
  stream: log,
});

app.get("/home", (req, res) => {
  res.send(`Olá, mundo!`);
});

app.get("/produtos", (req, res) => {
  res.send(`Olá, produtos!`);
});

app.post("/home", (req, res) => {
  res.send(`Olá, mundo! (post)`);
});

app.post("/produtos", (req, res) => {
  res.send(`Olá, produtos!`);
});

app.listen(4001, () => console.log("Servidor rodando na porta 4001!"));
