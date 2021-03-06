const db = require("../database");

exports.getCategories = (req, res, next) => {
    //db.Category.findAll()

    db.sequelize.query(`SELECT *, (SELECT GROUP_CONCAT(device.partNumber SEPARATOR ';')
    FROM devices as device WHERE category.id = device.categoryId
    GROUP BY category.id 
    ) AS listOfDevices FROM categories AS category`)
        .then(response => {
            const arrayDevicePerCategory = response[0].map(({ listOfDevices }) => listOfDevices != null ? listOfDevices.split(";").sort() : null);
            response[0].map((v, i) => v.listOfDevices = arrayDevicePerCategory[i]);
            res.send(response[0]);
        })
        .catch(err => console.log(err));
};

exports.createCategory = (req, res, next) => {
    const { name } = req.body;

    db.Category.create({ name })
        .then(response => res.send(response))
        .catch(err => console.log(err));
};

exports.deleteCategory = (req, res, next) => {
    const paramId = req.params.id;

    db.Category.destroy({ where: { id: paramId } })
        .then(() => res.send({ paramId }))
        .catch(err => console.log(err));
};