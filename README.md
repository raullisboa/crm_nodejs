# Projeto CRUD com Node.js, Express e SQLite

Este é um projeto básico de CRUD (Create, Read, Update, Delete) utilizando Node.js com o framework Express e o banco de dados SQLite.
O objetivo é fornecer uma estrutura simples para iniciar um servidor com funcionalidades de API para manipulação de dados.

---

## 📋 Passo a Passo para Configuração

### Passo 0: Configurar em Outra Máquina

Para rodar o projeto em uma nova máquina:

1. Clone o projeto com `git clone` ou copie a pasta para o novo sistema.
2. Instale as dependências: `npm install`
3. Inicie o servidor:

    Inicia o servidor em modo de desenvolvimento

    ```bash
    npm run dev
    ```

    Inicia o servidor em modo de produção

    ```bash
    npm start
    ```

### Passo 1: Pré-requisitos

1. Node.js: Certifique-se de ter o Node.js instalado.

2. Git (opcional): Caso deseje clonar o projeto diretamente do repositório.

### Passo 2: Clonar o Repositório ou Criar uma Pasta do Projeto

Caso o projeto esteja hospedado em uma plataforma como GitHub ou GitLab, clone-o com o comando:

  ```bash
  git clone https://github.com/seu-usuario/seu-repositorio.git`

  cd seu-repositorio
  ```

### Passo 3: Inicializar o Projeto Node e Configurar o package.json

Inicie o projeto:

  ```bash
  npm init -y
  ```

Isso criará um arquivo package.json básico.

Instale as dependências:

  ```bash
    npm install express sqlite3
  ```

Instale o Nodemon (opcional, apenas para desenvolvimento):

  ```bash
  npm install nodemon --save-dev
  ```

Configure o script dev no package.json (opcional):

Abra o package.json e adicione o seguinte script de inicialização para facilitar o uso do Nodemon:

  ```bash
    {
      "name": "meu-crud-node",
      "version": "1.0.0",
      "description": "Projeto CRUD com Node.js, Express e SQLite",
      "main": "index.js",
      "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
      },
      "dependencies": {
        "express": "^4.18.2",
        "sqlite3": "^5.0.2"
      },
      "devDependencies": {
        "nodemon": "^2.0.22"
      }
    }
  ```

Agora, você pode rodar o servidor:

Modo de desenvolvimento:

  ```bash
  npm run dev
  ```

Modo de produção:

  ```bash
  npm start`
  ```

### Passo 4: Criar os Arquivos de Código

Crie o arquivo database.js:

No diretório do projeto, crie o arquivo database.js e adicione a configuração de conexão com o banco de dados e as funções CRUD.

Crie o arquivo index.js:

No mesmo diretório, crie o arquivo index.js para configurar o servidor Express e definir as rotas RESTful do CRUD.

### Passo 5: Iniciar o Servidor

Para rodar o servidor:

Modo de desenvolvimento (com reinício automático):

  ```bash
  npm run dev
  ```

Modo de produção:

  ```bash
  npm start
  ```

O servidor estará disponível em `<http://localhost:3000>`.

### Passo 6: Testar as Rotas CRUD

Use uma ferramenta como Postman para testar as rotas HTTP (POST, GET, PUT, DELETE) do servidor.
Alternativamente, você pode usar cURL no terminal para fazer requisições HTTP.

🛠 Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.
Express: Framework web para Node.js.
SQLite3: Banco de dados SQL leve e independente.
Nodemon: Utilizado em desenvolvimento para reiniciar o servidor automaticamente ao detectar mudanças.
🚀 Como Contribuir
Faça um fork do projeto.
Crie uma nova branch para sua feature:
bash
Copiar código
git checkout -b minha-feature
Faça o commit das suas alterações:
bash
Copiar código
git commit -m "Adiciona minha nova feature"
Envie as alterações para o repositório remoto:
bash
Copiar código
git push origin minha-feature
Abra um Pull Request.
📜 Licença
Esse projeto é licenciado sob a licença MIT. Sinta-se à vontade para usar e modificar conforme suas necessidades.

⚠️ Observação
Não se esqueça de configurar o arquivo .gitignore para ignorar arquivos e diretórios que não devem ser incluídos no controle de versão, como node_modules/, arquivos .env, e logs.
