const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

// https://jasonwatmore.com/post/2020/09/17/sequelize-mysql-create-database-if-it-doesnt-exist

module.exports = db = {};

const initialize = () => {

    mysql.createConnection({ host: "localhost", user: "root", password: "root-admin" })
    .then((connection)=>{
        
        connection.query("CREATE DATABASE IF NOT EXISTS eldoradodb");
        const sequelize = new Sequelize('eldoradodb', 'root', 'root-admin', {
            host: 'localhost',
            dialect: "mysql",
        });
    
        db.Category = require("./models/category")(sequelize);
        db.Device = require("./models/device")(sequelize);
        db.Category.hasMany(db.Device);
        sequelize.sync();
    }) 
    
}

initialize();