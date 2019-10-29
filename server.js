const express = require('express'); // Importa express pelo require
const mongoose = require('mongoose') // Importa mongoose pelo require

const app = express(); // Atribui a constante app a função express

// Conexão com banco de dados mongoDB Atlas
mongoose.connect('mongodb+srv://admin:admin@omnistack-ymbxy.mongodb.net/nodeapi?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

// Rota raiz que retorna Hello Rockeatseat
app.get('/', (request, response) => {
    response.send('Hello Rocketseat.')
});

app.listen(3001) // Utilizar a porta 3001 do navegador