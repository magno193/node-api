const express = require('express');
const routes = express.Router()

const ProductController = require('../src/controllers/ProductController')

// Chama o método index na rota products
routes.get('/products', ProductController.index);

// Exportar rotas para ser usado em server.js
module.exports = routes;