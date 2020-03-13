const Sequelize = require('sequelize'); // instance of the class or the constructor.

// down below , initializing the constructor with - ('database name', 'username', 'password', 'object with other options')
const sequelize = new Sequelize('Nodejs','root','root',{
    host:'localhost', // here defining the where the project is hosted- server/localhost.
    dialect: 'mysql' // here defining the type of the database
});

module.exports = sequelize;