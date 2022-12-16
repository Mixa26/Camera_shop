const {sequelize, Camera_shop, Cameras, Employees,
Filters, Lenses, Microphones, Purchases, shopping_cart,
Suppliers, Tripods} = require("../models");
const express = require('express');

const cors = require('cors');

//TODO ODRADI VALIDACIJE OVDE

const rtr = express.Router();
rtr.use(express.json());
rtr.use(express.urlencoded({extended: true}));
rtr.use(cors());

//GET ALL METHODS
rtr.get('/camera_shops', (req, res) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    Camera_shop.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/cameras', (req, res) => {
    Cameras.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/employees', (req, res) => {
    Employees.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/filters', (req, res) => {
    Filters.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/lenses', (req, res) => {
    Lenses.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/microphones', (req, res) => {
    Microphones.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/purchases', (req, res) => {
    Purchases.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/shopping_cart', (req, res) => {
    shopping_cart.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/suppliers', (req, res) => {
    Suppliers.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/tripods', (req, res) => {
    Tripods.findAll()
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

//GET ONE METHODS
rtr.get('/camera_shops/:id', (req, res) => {
    Camera_shop.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/cameras/:id', (req, res) => {
    Cameras.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/employees/:id', (req, res) => {
    Employees.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/filters/:id', (req, res) => {
    Filters.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/lenses/:id', (req, res) => {
    Lenses.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/microphones/:id', (req, res) => {
    Microphones.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/purchases/:id', (req, res) => {
    Purchases.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/shopping_cart/:id', (req, res) => {findOne({ where: { id: req.params.id } })
    shopping_cart.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/suppliers/:id', (req, res) => {
    Suppliers.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.get('/tripods/:id', (req, res) => {
    Tripods.findOne({ where: { id: req.params.id } })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

//CREATE METHODS
rtr.post('/camera_shops', (req, res) => {
    Camera_shop.create({ name: req.body.name , location: req.body.location })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/cameras', (req, res) => {
    Cameras.create({ company: req.body.company, model: req.body.model, sensor: req.body.sensor, 
        megapixels: req.body.megapixels, video_size: req.body.video_size, video_fps: req.body.video_fps,
        price: req.body.price, camera_shopId: req.body.camera_shopId, shopping_cartId: req.body.shopping_cartId})
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/employees', (req, res) => {
    Employees.create({ name: req.body.name, surname: req.body.surname, email: req.body.email,
        phoneNum: req.body.phoneNum, camera_shopId: req.body.camera_shopId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/filters', (req, res) => {
    Filters.create({ company: req.body.company, diameter: req.body.diameter, purppse: req.body.purpose,
        price: req.body.price, camera_shopId: req.body.camera_shopId, shopping_cartId: req.body.shopping_cartId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/lenses', (req, res) => {
    Lenses.create({ company: req.body.company, zoom: req.body.zoom, focal_length: req.body.focal_length,
        mount: req.body.mount, price: req.body.price,
        camera_shopId: req.body.camera_shopId, shopping_cartId: req.body.shopping_cartId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/microphones', (req, res) => {
    Microphones.create({ company: req.body.company, model: req.body.model, type: req.body.type,
        frequency_range: req.body.frequency_range, price: req.body.price,
        camera_shopId: req.body.camera_shopId, shopping_cartId: req.body.shopping_cartId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/purchases', (req, res) => {
    Purchases.create({ price: req.body.price, date: req.body.date, camera_shopId: req.body.camera_shopId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/shopping_cart', (req, res) => {
    shopping_cart.create({ price: req.body.price, purchaseId: req.body.purchaseId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/suppliers', (req, res) => {
    Suppliers.create({ name: req.body.name, country_origin: req.body.country_origin ,
        camera_shopId: req.body.camera_shopId})
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

rtr.post('/tripods', (req, res) => {
    Tripods.create({ company: req.body.company, model: req.body.model, carry_capacity: req.body.carry_capacity,
        meant_for: req.body.meant_for, price: req.body.price,
        camera_shopId: req.body.camera_shopId, shopping_cartId: req.body.shopping_cartId })
        .then(rows => res.json(rows))
        .catch(err => res.status(500).json(err))
});

//UPDATE METHODS
rtr.put('/camera_shops/:id', (req, res) => {
    Camera_shop.findOne({ where: { id: req.params.id } })
        .then(shop => {
            shop.name = req.body.name
            shop.location = req.body.location

            shop.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/cameras/:id', (req, res) => {
    Cameras.findOne({ where: { id: req.params.id } })
        .then(camera => {
            camera.company = req.body.company,
            camera.model = req.body.model,
            camera.sensor = req.body.sensor,
            camera.megapixels = req.body.megapixels,
            camera.video_size = req.body.video_size,
            camera.video_fps = req.body.video_fps,
            camera.price = req.body.price

            camera.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/employees/:id', (req, res) => {
    Employees.findOne({ where: { id: req.params.id } })
        .then(employee => {
            employee.name = req.body.name,
            employee.surname = req.body.surname,
            employee.email = req.body.email,
            employee.phoneNum = req.body.phoneNum

            employee.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/filters/:id', (req, res) => {
    Filters.findOne({ where: { id: req.params.id } })
        .then(filter => {
            filter.company = req.body.company,
            filter.diameter = req.body.diameter,
            filter.purpose = req.body.purpose,
            filter.price = req.body.price

            filter.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/lenses/:id', (req, res) => {
    Lenses.findOne({ where: { id: req.params.id } })
        .then(lens => {
            lens.company = req.body.company,
            lens.zoom = req.body.zoom,
            lens.focal_length = req.body.focal_length,
            lens.mount = req.body.mount,
            lens.price = req.body.price

            lens.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/microphones/:id', (req, res) => {
    Microphones.findOne({ where: { id: req.params.id } })
        .then(microphone => {
            microphone.company = req.body.company,
            microphone.model = req.body.model,
            microphone.type = req.body.type,
            microphone.frequency_range = req.body.frequency_range,
            microphone.price = req.body.price

            microphone.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/purchases/:id', (req, res) => {
    Purchases.findOne({ where: { id: req.params.id } })
        .then(purchase => {
            purchase.price = req.body.price,
            purchase.date = req.body.date

            purchase.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/shopping_cart/:id', (req, res) => {findOne({ where: { id: req.params.id } })
    shopping_cart.findOne({ where: { id: req.params.id } })
        .then(shopping_cart => {
            shopping_cart.price = req.body.price

            shopping_cart.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/suppliers/:id', (req, res) => {
    Suppliers.findOne({ where: { id: req.params.id } })
        .then(supplier => {
            supplier.name = req.body.name,
            supplier.country_origin = req.body.country_origin

            supplier.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.put('/tripods/:id', (req, res) => {
    Tripods.findOne({ where: { id: req.params.id } })
        .then(tripod => {
            tripod.company = req.body.company,
            tripod.model = req.body.model,
            tripod.carry_capacity = req.body.carry_capacity,get
            tripod.meant_for = req.body.meant_for,
            tripod.price = req.body.price

            tripod.save()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

//DELETE METHODS
rtr.delete('/camera_shops/:id', (req, res) => {
    Camera_shop.findOne({ where: { id: req.params.id } })
        .then(shop => {
            shop.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/cameras/:id', (req, res) => {
    Cameras.findOne({ where: { id: req.params.id } })
        .then(camera => {
           camera.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/employees/:id', (req, res) => {
    Employees.findOne({ where: { id: req.params.id } })
        .then(employee => {
           employee.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/filters/:id', (req, res) => {
    Filters.findOne({ where: { id: req.params.id } })
        .then(filter => {
            filter.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/lenses/:id', (req, res) => {
    Lenses.findOne({ where: { id: req.params.id } })
        .then(lens => {
            lens.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/microphones/:id', (req, res) => {
    Microphones.findOne({ where: { id: req.params.id } })
        .then(microphone => {
            microphone.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/purchases/:id', (req, res) => {
    Purchases.findOne({ where: { id: req.params.id } })
        .then(purchase => {
          purchase.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/shopping_cart/:id', (req, res) => {findOne({ where: { id: req.params.id } })
    shopping_cart.findOne({ where: { id: req.params.id } })
        .then(shopping_cart => {
          shopping_cart.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/suppliers/:id', (req, res) => {
    Suppliers.findOne({ where: { id: req.params.id } })
        .then(supplier => {
           supplier.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

rtr.delete('/tripods/:id', (req, res) => {
    Tripods.findOne({ where: { id: req.params.id } })
        .then(tripod => {
            tripod.destroy()
                .then(rows => res.json(rows))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
});

module.exports = rtr;