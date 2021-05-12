const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const db = require("./database");

const categoryRoutes = require('./routes/category-routes');
const deviceRoutes = require('./routes/device-routes');


const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(categoryRoutes);
app.use(deviceRoutes);

app.listen(8000, () => {
    console.log("Connected to localhost:8000");
});





