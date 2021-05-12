const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const sequelize = require("./database");

const categoryRoutes = require('./routes/category-routes');
const deviceRoutes = require('./routes/device-routes');

const Category = require("./models/category");
const Device = require("./models/device");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(categoryRoutes);
app.use(deviceRoutes);

sequelize.query("CREATE DATABASE IF NOT EXISTS eldoradodb")
    .then(() => {
        sequelize.authenticate()
            .then(() => {
                sequelize.query("USE eldoradodb")
            })
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .then(() => {
                sequelize.sync().then(() => {

                    app.listen(8000, () => {
                        console.log("Connected to localhost:8000");
                    });
                }).catch(err => console.log(err));
            }).catch((err) => {
                console.log('Unable to connect to the database:', err);
            });
    })
    .catch(err => console.log(err));




