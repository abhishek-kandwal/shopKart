const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const product = sequelize.define('product', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    productname : {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    } ,
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = product;