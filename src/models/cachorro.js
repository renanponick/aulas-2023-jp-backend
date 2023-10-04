const Pessoa = require('./pessoa.js');
const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Cachorro = sequelize.define('Cachorro', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    raca: {
      type: DataTypes.STRING
    },
    pessoaId: {
        field: 'pessoa_id',
        type: DataTypes.INTEGER,
        references: {
            model: Pessoa,
            key: 'id'
        }
    }
  }, {
    createdAt: false,
    updatedAt: false,
});

module.exports = Cachorro;
  