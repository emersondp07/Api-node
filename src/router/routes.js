const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ Funcionado: 'Hello world' })
});

module.exports = routes;