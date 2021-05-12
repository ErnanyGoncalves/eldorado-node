const express = require("express");

const categoryController = require('../controllers/category-controllers');

const app = express();

app.route("/category")
    .get(categoryController.getCategories) //Listagem

app.route("/category/new")
    .post(categoryController.createCategory) // Cadastro

app.route("/category/:id")
    .delete(categoryController.deleteCategory); // Exclusão

module.exports = app;