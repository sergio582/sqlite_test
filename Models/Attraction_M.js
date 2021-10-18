const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../database");
const { use } = require('../Routes/Attraction_R');

class Attraction extends Model { }

Attraction.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    people: {
        type: DataTypes.INTEGER
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'attraction' // We need to choose the model name
});

module.exports = Attraction