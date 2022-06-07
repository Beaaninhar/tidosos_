const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.json({ massege: "olá" });
});

app.listen(4001, () =>
  console.log("Servidor rodando com o framework express na porta 4001!")
);
