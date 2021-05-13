const express = require("express");

const deviceController = require('../services/device-services');

const app = express();

app.route("/device")
    .get(deviceController.getDevices) //Listagem
    .post(deviceController.createDevice) // Cadastro
  

app.route("/device/:id")
    .delete(deviceController.deleteDevice); // Exclusão

module.exports = app;