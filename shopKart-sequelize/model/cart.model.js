const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const cart = sequelize.define('cart', {
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
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantity: {
        type : Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = cart;