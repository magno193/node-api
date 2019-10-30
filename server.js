const express = require('express'); // Importa express pelo require
const mongoose = require('mongoose') // Importa mongoose pelo require
const requireDir = require('require-dir') // importa require-dir

// Atribui a constante app a função express
const app = express();
// Permitir enviar dados para aplicação no formato JSON
app.use(express.json());

// Conexão com banco de dados mongoDB Atlas
mongoose.connect(
    'mongodb+srv://admin:admin@omnistack-ymbxy.mongodb.net/nodeapi?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Registrar todas as models
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes')); // Raiz

app.listen(3001) // Utilizar a porta 3001 do navegador