const Sequelize = require("sequelize");
const sequelize = require("../database");

const Device = sequelize.define('device', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    color: {
        type: Sequelize.STRING(16),
        allowNull: false
    },
    partNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});

module.exports = Device;