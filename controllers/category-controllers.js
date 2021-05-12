const Category = require("../models/category");
const sequelize = require("../database");
exports.getCategories = (req, res, next) => {
    console.log(sequelize);
    const categories = Category.findAll()
        .then(res => console.log(res[0].dataValues))
        .catch(err => console.log(err));
};

exports.createCategory = (req, res, next) => {

    const { name } = req.body;

    Category.create({ name })
        .then(res => res.send("New category created!"))
        .catch(err => console.log(err));
};

exports.deleteCategory = (req, res, next) => {
    const paramId = req.params.id;

    Category.destroy({ where: { id: paramId } })
        .then(res => res.send("Category", paramId, "deleted!"))
        .catch(err => console.log(err));
};