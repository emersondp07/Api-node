const express = require('express');
const axios = require('axios').default;

const User = require('../model/User');

const routes = express.Router();

routes.post('/create', async (req, res) => {
    try{
        const user = await User.create(req.body);

        return res.send({ user });
    } catch (err){
        return res.status(400).send({ error: 'Registration failed' });
    }
})

module.exports = routes;