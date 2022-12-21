const express = require('express');
const {sequelize, Users} = require('../models');
const path = require("path");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();

const options = {root: path.join(__dirname, "../static")};

var corsOptions = {
    origin: 'http://127.0.0.1:9000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

app.post('/login', (req, res) => {
    Users.findOne({where: {username: req.body.username}})
    .then(usr => {
        if (bcrypt.compareSync(req.body.password, usr.password)){
            const obj = {
                id: usr.id,
                username: usr.username
            }

            const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET)

            res.json({ token: token });
        } else {
            res.status(400).json({ msg: "Invalid credentials"});
        }
    })
    .catch( err => res.status(500).json(err) );
});

app.post('/register', (req,res) => {
    const obj = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        admin: req.body.admin
    }

    Users.create(obj).then(rows => {
        const usr = {
            id: rows.id,
            username: rows.username
        }

        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET)

        res.json({ token: token });
    }).catch(err => {res.status(501).json(err)})
});

app.listen({port: 8080}, async() => {
    await sequelize.authenticate();
    console.log("Auth server on port 8080.");
});