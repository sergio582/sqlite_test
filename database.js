const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Data/atractions.sqlite'
});

module.exports = sequelize;