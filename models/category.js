const { Sequelize } = require('sequelize');

module.exports =  model = (sequelize) => sequelize.define('category',
    {
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