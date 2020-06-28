const express = require('express');
const mongoose = require('mongoose');
const cors= require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://henrique:bleach10@cluster0-pe1tn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos http get, post, put, delete

// Tipos de parametros

// Query Params: request.query (Filtros, ordenação, paginação, ...);
// Route Params: request.params (Identificar um recurso na alteração ou remoção);
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello dsdasd' });
});

app.listen(3333);
