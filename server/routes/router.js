const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.get('/api/users/:id' , controller.find)
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;