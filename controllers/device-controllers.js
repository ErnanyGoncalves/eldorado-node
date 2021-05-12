const Device = require("../models/device");

exports.getDevices = (req, res, next) => {

    const devices = Device.findAll()
        .then(res => console.log(res[0].dataValues))
        .catch(err => console.log(err));
};

exports.createDevice = (req, res, next) => {
    const { color, partNumber, categoryId } = req.body;

    Device.create({ color, partNumber, categoryId })
        .then(res => res.send("New device created!"))
        .catch(err => console.log(err));
};

exports.deleteDevice = (req, res, next) => {
    const paramId = req.params.id;
    Device.destroy({ where: { id: paramId } })
        .then(res => res.send("Device", paramId, "deleted!"))
        .catch(err => console.log(err));
};