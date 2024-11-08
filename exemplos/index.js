// index.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database"); // Importa as funções do CRUD

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rota para criar um usuário
app.post("/usuarios", (req, res) => {
  const { name, password } = req.body;
  db.criarUsuario(name, password, (err, result) => {
    if (err) return res.status(500).json({ error: "Erro ao criar usuário" });
    res.status(201).json({ message: "Usuário criado", id: result.id });
  });
});

// Rota para listar todos os usuários
app.get("/usuarios", (req, res) => {
  db.listarUsuarios((err, rows) => {
    if (err) return res.status(500).json({ error: "Erro ao buscar usuários" });
    res.json(rows);
  });
});

// Rota para buscar um usuário pelo ID
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.buscarUsuarioPorId(id, (err, user) => {
    if (err) return res.status(500).json({ error: "Erro ao buscar usuário" });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(user);
  });
});

// Rota para atualizar um usuário
app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  db.atualizarUsuario(id, name, password, (err) => {
    if (err)
      return res.status(500).json({ error: "Erro ao atualizar usuário" });
    res.json({ message: "Usuário atualizado com sucesso" });
  });
});

// Rota para excluir um usuário
app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  db.excluirUsuario(id, (err) => {
    if (err) return res.status(500).json({ error: "Erro ao excluir usuário" });
    res.json({ message: "Usuário excluído com sucesso" });
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
