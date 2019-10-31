const mongoose = require('mongoose');

// Instanciar model Product
const Product = mongoose.model('Product');

module.exports = {
    // Lista todos os produtos da base de dados
    async index(require, response) {
        const products = await Product.find();

        // Retornar em uma estrutura JSON
        return response.json(products)
    },

    // Mostra um produto de acordo com o seu id na
    // rota products/:id
    async show(require, response) {
        // Armazena dados de produto pelo o seu id 
        // nos parâmetros da rota
        const product = await Product.findById(require.params.id);

        return response.json(product);
    },

    // Cria um novo produto pela requisição
    async store(require, response) {
        const product = await Product.create(require.body);

        return response.json(product);
    },
    
    // Atualiza um produto pelo o seu id
    async update(require, response) {
        // Dá update pelo require.body
        const product = await Product.findByIdAndUpdate(
            require.params.id, // Busca pelo id
            require.body, // Atualiza pelo body
            { new: true }); // Permite a alteração

        return response.json(product);
    },

    async destroy(require, response) {

        const product = await Product.findByIdAndDelete(
            require.params.id,
            require.body
        )
    }
};