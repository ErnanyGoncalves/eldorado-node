const db = require("../database");
const { Sequelize } = require('sequelize');

exports.getDevices = (req, res, next) => {
    /*
    db.Device.findAll({
        attributes: {
            include: [
                Sequelize.literal(`(
               SELECT category.name from categories AS category WHERE category.id = device.categoryId
            ) as name`
                )
            ]
        }
    })
    */
    db.sequelize.query(`SELECT id, color,partNumber, categoryId, (
        SELECT name from categories AS category WHERE device.categoryId = category.id
    ) as categoryName FROM devices AS device`)
        .then(response => { console.log(response); res.send(response) })
        .catch(err => console.log(err));
};

exports.createDevice = (req, res, next) => {
    const { color, partNumber, categoryId } = req.body;

    db.Device.create({ color, partNumber, categoryId })
        .then(response => res.send(response))
        .catch(err => console.log(err));
};

exports.deleteDevice = (req, res, next) => {
    const paramId = req.params.id;

    db.Device.destroy({ where: { id: paramId } })
        .then(() => res.send("Deleted!"))
        .catch(err => console.log(err));
};