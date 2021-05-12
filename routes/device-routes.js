const express = require("express");

const deviceController = require('../controllers/device-controllers');

const app = express();

app.route("/device")
    .get(deviceController.getDevices) //Listagem

app.route("/device/new")
    .post(deviceController.createDevice) // Cadastro

app.route("/device/:id")
    .delete(deviceController.deleteDevice); // Exclusão

module.exports = app;