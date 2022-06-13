const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get("/home", (req, res) => {
  res.send(`>>> olá <<<`);
});

app.listen(4001, () =>
  console.log("Servidor rodando com o framework express na porta 4001!")
);
