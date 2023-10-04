const { Sequelize } = require('sequelize');
const { development } = require('./config');
const Pessoa = require('./models/pessoa');
const Cachorro = require('./models/cachorro');

// CREATE TABLE pessoas (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     nome VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     senha VARCHAR(255)
//   );
  
// INSERT INTO pessoas (nome, email, senha) VALUES ('João da Silva', 'joao@example.com', 'senha123');

// CREATE TABLE Cachorros (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   nome VARCHAR(255) NOT NULL,
//   raca VARCHAR(255),
//   pessoa_id INT,
//   FOREIGN KEY (pessoa_id) REFERENCES pessoas(id)
// );

// INSERT INTO Cachorros (nome, raca, pessoa_id) VALUES ('Fido', 'Labrador', 1);
// INSERT INTO Cachorros (nome, raca, pessoa_id) VALUES ('Rex', 'Golden Retriever', 1);

const sequelize = new Sequelize(development)
sequelize.sync()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

module.exports = sequelize