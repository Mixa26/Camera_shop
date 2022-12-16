const express = require("express");
const path = require("path");
const cors = require("cors");
const application_routes = require("../routes/application-routes.js");

const app = express();

app.use(express.static(path.join(__dirname, "../static/camera_shop")));

app.use("/admin", application_routes);

app.use(cors());

app.listen({port: 9000}, async () => {
    console.log("Running application-server on port 9000.");
});