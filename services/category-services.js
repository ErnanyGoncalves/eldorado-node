const db = require("../database");

exports.getCategories = (req, res, next) => {
    db.Category.findAll()
        .then(response => res.send(response))
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
        .then(() => res.send("Deleted!"))
        .catch(err => console.log(err));
};