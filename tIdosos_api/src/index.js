// TODO: Excluir arquivo depois de instalar o expess
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Rodou galerinha 0/",
      })
    );
  })
  .listen(4000, () => console.log("Servidor rodando o/ na porta 4000"));
