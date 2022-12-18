const express = require('express');
const path = require('path');

const rtr = express.Router();
rtr.use(express.json());

const options = {root: path.join(__dirname, "../static")};
//Main
rtr.get('/main', (req,res) => {
    res.sendFile("main.html", options)
});
//Camera shops
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

//Cameras
rtr.get('/cameras', (req,res) => {
    res.sendFile("cameras/show_cameras.html", options)
});

rtr.get('/create_cameras', (req,res) => {
    res.sendFile("cameras/create_cameras.html", options)
});

rtr.get('/delete_cameras', (req,res) => {
    res.sendFile("cameras/delete_cameras.html", options)
});

rtr.get('/update_cameras', (req,res) => {
    res.sendFile("cameras/update_cameras.html", options)
});

//Employees
rtr.get('/employees', (req,res) => {
    res.sendFile("employees/show_employees.html", options)
});

rtr.get('/create_employees', (req,res) => {
    res.sendFile("employees/create_employees.html", options)
});

rtr.get('/delete_employees', (req,res) => {
    res.sendFile("employees/delete_employees.html", options)
});

rtr.get('/update_employees', (req,res) => {
    res.sendFile("employees/update_employees.html", options)
});

//Filters
rtr.get('/filters', (req,res) => {
    res.sendFile("filters/show_filters.html", options)
});

rtr.get('/create_filters', (req,res) => {
    res.sendFile("filters/create_filters.html", options)
});

rtr.get('/delete_filters', (req,res) => {
    res.sendFile("filters/delete_filters.html", options)
});

rtr.get('/update_filters', (req,res) => {
    res.sendFile("filters/update_filters.html", options)
});

//Lenses
rtr.get('/lenses', (req,res) => {
    res.sendFile("lenses/show_lenses.html", options)
});

rtr.get('/create_lenses', (req,res) => {
    res.sendFile("lenses/create_lenses.html", options)
});

rtr.get('/delete_lenses', (req,res) => {
    res.sendFile("lenses/delete_lenses.html", options)
});

rtr.get('/update_lenses', (req,res) => {
    res.sendFile("lenses/update_lenses.html", options)
});

//Microphones
rtr.get('/microphones', (req,res) => {
    res.sendFile("microphones/show_microphones.html", options)
});

rtr.get('/create_microphones', (req,res) => {
    res.sendFile("microphones/create_microphones.html", options)
});

rtr.get('/delete_microphones', (req,res) => {
    res.sendFile("microphones/delete_microphones.html", options)
});

rtr.get('/update_microphones', (req,res) => {
    res.sendFile("microphones/update_microphones.html", options)
});

//Purchase
rtr.get('/purchases', (req,res) => {
    res.sendFile("purchase/show_purchase.html", options)
});

rtr.get('/create_purchases', (req,res) => {
    res.sendFile("purchase/create_purchase.html", options)
});

rtr.get('/delete_purchases', (req,res) => {
    res.sendFile("purchase/delete_purchase.html", options)
});

rtr.get('/update_purchases', (req,res) => {
    res.sendFile("purchase/update_purchase.html", options)
});

//Shopping cart
rtr.get('/shopping_cart', (req,res) => {
    res.sendFile("shopping_cart/show_shopping_cart.html", options)
});

rtr.get('/create_shopping_cart', (req,res) => {
    res.sendFile("shopping_cart/create_shopping_cart.html", options)
});

rtr.get('/delete_shopping_cart', (req,res) => {
    res.sendFile("shopping_cart/delete_shopping_cart.html", options)
});

rtr.get('/update_shopping_cart', (req,res) => {
    res.sendFile("shopping_cart/update_shopping_cart.html", options)
});

//Suppliers
rtr.get('/suppliers', (req,res) => {
    res.sendFile("suppliers/show_suppliers.html", options)
});

rtr.get('/create_suppliers', (req,res) => {
    res.sendFile("suppliers/create_suppliers.html", options)
});

rtr.get('/delete_suppliers', (req,res) => {
    res.sendFile("suppliers/delete_suppliers.html", options)
});

rtr.get('/update_suppliers', (req,res) => {
    res.sendFile("suppliers/update_suppliers.html", options)
});

//Tripods
rtr.get('/tripods', (req,res) => {
    res.sendFile("tripods/show_tripods.html", options)
});

rtr.get('/create_tripods', (req,res) => {
    res.sendFile("tripods/create_tripods.html", options)
});

rtr.get('/delete_tripods', (req,res) => {
    res.sendFile("tripods/delete_tripods.html", options)
});

rtr.get('/update_tripods', (req,res) => {
    res.sendFile("tripods/update_tripods.html", options)
});

module.exports = rtr;