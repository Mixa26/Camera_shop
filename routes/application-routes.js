const express = require('express');
const path = require('path');

const rtr = express.Router();
rtr.use(express.json());

const options = {root: path.join(__dirname, "../static")};

rtr.get('/camera_shops', (req,res) => {
    //res.sendFile(__dirname, "../static/camera_shop/show_camera_shop.html");
    //res.sendFile("show_camera_shop.html");
    res.sendFile("camera_shop/show_camera_shop.html", options)
});

rtr.get('/create_camera_shops', (req,res) => {
    res.sendFile("camera_shop/create_camera_shop.html", options)
});

rtr.get('/delete_camera_shops', (req,res) => {
    res.sendFile("camera_shop/delete_camera_shop.html", options)
});

rtr.get('/update_camera_shops', (req,res) => {
    res.sendFile("camera_shop/update_camera_shop.html", options)
});

module.exports = rtr;