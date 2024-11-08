// database.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./banco.db");

// Criação da Tabela (executar uma vez para configurar o banco)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`);
  console.log('Tabela "users" criada (se não existia).');
});

// Função para inserir um usuário
function criarUsuario(name, password, callback) {
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  db.run(
    `INSERT INTO users (name, password, created_at, updated_at) VALUES (?, ?, ?, ?)`,
    [name, password, createdAt, updatedAt],
    function (err) {
      if (err) {
        console.error("Erro ao inserir usuário:", err.message);
        callback(err);
      } else {
        console.log("Usuário inserido com sucesso, ID:", this.lastID);
        callback(null, { id: this.lastID });
      }
    }
  );
}

// Função para listar todos os usuários
function listarUsuarios(callback) {
  db.all(`SELECT * FROM users`, (err, rows) => {
    if (err) {
      console.error("Erro ao buscar usuários:", err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
}

// Função para buscar um usuário pelo ID
function buscarUsuarioPorId(id, callback) {
  db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
    if (err) {
      console.error("Erro ao buscar usuário:", err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
}

// Função para atualizar um usuário
function atualizarUsuario(id, name, password, callback) {
  const updatedAt = new Date().toISOString();
  db.run(
    `UPDATE users SET name = ?, password = ?, updated_at = ? WHERE id = ?`,
    [name, password, updatedAt, id],
    function (err) {
      if (err) {
        console.error("Erro ao atualizar usuário:", err.message);
        callback(err);
      } else {
        console.log("Usuário atualizado com sucesso, ID:", id);
        callback(null);
      }
    }
  );
}

// Função para excluir um usuário
function excluirUsuario(id, callback) {
  db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
    if (err) {
      console.error("Erro ao excluir usuário:", err.message);
      callback(err);
    } else {
      console.log("Usuário excluído com sucesso, ID:", id);
      callback(null);
    }
  });
}

// Exporta as funções para uso em outros arquivos
module.exports = {
  criarUsuario,
  listarUsuarios,
  buscarUsuarioPorId,
  atualizarUsuario,
  excluirUsuario,
};
