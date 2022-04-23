const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../database/index');

const User = db.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    document: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    acceptedTerms: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    accessCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    street: {
        type: Sequelize.STRING,
    },
    neighborhood: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    createdAt:{
        type: Sequelize.DATE,
    },
    updatedAt: {
        type: Sequelize.DATE,
    }
});

(async () => {
  await User.sync({force: true});
})();

module.exports = User;