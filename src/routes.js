const { Router } = require('express');
const Controller = require('./Controller');
const routes = Router();

routes.post('/simular', Controller.simular);

module.exports = routes;