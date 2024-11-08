const sqlite3 = require("sqlite3").verbose();

// Conecta ao banco de dados (ou cria, se não existir)
const db = new sqlite3.Database("banco.db");

// Função para criar as tabelas
db.serialize(() => {
  // Cria a tabela "users" se não existir
  db.run(
    `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `,
    (err) => {
      if (err) {
        console.error("Erro ao criar a tabela users:", err.message);
      } else {
        console.log('Tabela "users" criada com sucesso!');
      }
    }
  );

  // Cria a tabela "tasks" se não existir
  db.run(
    `
        CREATE TABLE IF NOT EXISTS tasks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `,
    (err) => {
      if (err) {
        console.error("Erro ao criar a tabela tasks:", err.message);
      } else {
        console.log('Tabela "tasks" criada com sucesso!');
      }
    }
  );
});

// Fecha a conexão ao banco de dados
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
