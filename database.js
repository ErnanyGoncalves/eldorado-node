const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('', 'root', 'root-admin', {
    host: 'localhost',
    dialect: "mysql",
});

module.exports = sequelize;
