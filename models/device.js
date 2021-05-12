const { Sequelize } = require('sequelize');

module.exports =  model = (sequelize) => sequelize.define('device',
    {
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
    }, {
    timestamps: false
});