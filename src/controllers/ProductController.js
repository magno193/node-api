const mongoose = require('mongoose');

// Instanciar model Product
const Product = mongoose.model('Product');

module.exports = {
    // Lista todos os produtos da base de dados
    async index(require, response) {
        const products = await Product.find();

        // Retornar em uma estrutura JSON
        return response.json(products)
    }
}