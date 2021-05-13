const db = require("../database");

exports.getDevices = (req, res, next) => {

    db.Device.findAll()
        .then(response => res.send(response))
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