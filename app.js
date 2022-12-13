/*const exp = require('express');
const app = exp();

app.listen(8080);*/
const express = require("express");
const path = require("path");
const rest_routes = require("./routes/rest-routes.js");
const { sequelize } = require("./models");

const app = express();

app.use("/api", rest_routes);

//app.use(express.static(path.join(__dirname, 'static')));
/*
app.get('/', (req,res) => {
    res.sendFile();
});
*/
app.listen({port: 8000}, async () =>{
    await sequelize.authenticate();
});