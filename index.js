const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');
const servicosRouter = require('./routes/servicos');
const homeRouter = require('./routes/home');

app.use(express.static('public'));
app.set('view engine', 'ejs'); 
// app.set('views', './views'); // padrão o express já configura a pasta views

app.use(homeRouter);
app.use(petsRouter);
app.use(servicosRouter);

app.listen(3000, () => console.log('Rodando...'))