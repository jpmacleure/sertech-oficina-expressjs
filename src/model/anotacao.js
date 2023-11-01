const Sequelize = require('sequelize');
const database = require('../db');

const Anotacao = database.define('anotacao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subtitulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    texto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    indicador_ativo: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Anotacao;