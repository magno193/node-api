const mongoose = require('mongoose');

// Esquema do model Product
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Criando o model Product
mongoose.model('Product', ProductSchema);