const Sequelize = require("sequelize");
const sequelize = require("../database");
const Device = require("./device");

const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: false
    }
}, {
    timestamps: false,
    onDelete: 'cascade'
});

Category.hasMany(Device);

module.exports = Category;