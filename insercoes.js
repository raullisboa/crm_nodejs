const sqlite3 = require("sqlite3").verbose();

// Conecta ao banco de dados
const db = new sqlite3.Database("banco.db");

// Função para inserir um usuário
function inserirUsuario(name, password) {
  const db = new sqlite3.Database("banco.db");
  const query = `INSERT INTO users (name, password, created_at, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
  db.run(query, [name, password], function (err) {
    if (err) {
      console.error("Erro ao inserir usuário:", err.message);
    } else {
      console.log(`Usuário inserido com sucesso! ID: ${this.lastID}`);
    }
  });
}

// Função para inserir uma tarefa
function inserirTarefa(task) {
  const query = `INSERT INTO tasks (task, created_at, updated_at) VALUES (?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;
  db.run(query, [task], function (err) {
    if (err) {
      console.error("Erro ao inserir tarefa:", err.message);
    } else {
      console.log(`Tarefa inserida com sucesso! ID: ${this.lastID}`);
    }
  });
}

// Exemplo de uso
// inserirUsuario('Raul', '1234senha');
// inserirTarefa('Finalizar o projeto de programação');

// Fecha a conexão com o banco de dados ao finalizar
db.close((err) => {
  if (err) {
    console.error(
      "Erro ao fechar a conexão com o banco de dados:",
      err.message
    );
  } else {
    console.log("Conexão com o banco de dados fechada");
  }
});

// Exporta as funções caso queira utilizá-las em outro arquivo
module.exports = { inserirUsuario, inserirTarefa };
