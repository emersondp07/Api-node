const express = require('express');
const routes = require('./router/routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);