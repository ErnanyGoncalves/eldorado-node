const express = require("express");

const categoryController = require('../services/category-services');

const app = express();

app.route("/category")
    .get(categoryController.getCategories) //Listagem
    .post(categoryController.createCategory) // Cadastro

app.route("/category/:id")
    .delete(categoryController.deleteCategory); // Exclusão

module.exports = app;