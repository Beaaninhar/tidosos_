const morganBody = require("morgan-body");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const moment = require("moment");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(routes);

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

app.listen(4001, () => console.log("Servidor rodando na porta 4001!"));
