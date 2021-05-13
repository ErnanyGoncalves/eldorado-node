const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require("./database");

const categoryControllers = require('./controllers/category-controllers');
const deviceControllers = require('./controllers/device-controllers');

//https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(categoryControllers);
app.use(deviceControllers);

app.listen(8000, () => {
    console.log("Connected to localhost:8000");
});





