const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { inserirUsuario } = require("./insercoes");

const app = express();
const port = 3000;

// Middleware para interpretar dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para exibir o HTML puro
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "criarUsuario.html"));
});

// Rota para processar o formulário
app.post("/criar-usuario", (req, res) => {
  const { name, password } = req.body;

  // Chama a função para inserir o usuário no banco de dados
  inserirUsuario(name, password);

  // Responde com uma mensagem de sucesso
  res.send("Usuário criado com sucesso!");
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
