const express = require('express'); // Importa express pelo require
const mongoose = require('mongoose') // Importa mongoose pelo require
const requireDir = require('require-dir') // importa require-dir

const app = express(); // Atribui a constante app a função express

// Conexão com banco de dados mongoDB Atlas
mongoose.connect('mongodb+srv://admin:admin@omnistack-ymbxy.mongodb.net/nodeapi?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Registrar todas as models
requireDir('./src/models');

// Instancia a model Product
const Product = mongoose.model('Product');

// Rota raiz que retorna Hello Rockeatseat e
// cria um registo do model Product
app.get('/', (request, response) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    })

    return response.send("Hello Rocketseat")
});

app.listen(3001) // Utilizar a porta 3001 do navegador