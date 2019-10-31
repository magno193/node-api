const express = require('express');
const routes = express.Router()

const ProductController = require('../src/controllers/ProductController')

// Cria rotas e chama uma controller
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Exportar rotas para ser usado em server.js
module.exports = routes;