const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose') 
const requireDir = require('require-dir') 

// Atribui a constante app a função express
const app = express();
// Permitir enviar dados para aplicação no formato JSON
app.use(express.json());
// Permitir o uso de cors liberando acesso para todos domínios
app.use(cors());

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