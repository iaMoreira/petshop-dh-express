const express = require('express');
const methodOverride = require('method-override');
const app = express();
const petsRouter = require('./routes/pets');
const servicosRouter = require('./routes/servicos');
const homeRouter = require('./routes/home');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 
// app.set('views', './views'); // padrão o express já configura a pasta views
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // responsavel pela conversão do inputs para json ou js 


app.use(homeRouter);
app.use(petsRouter);
app.use(servicosRouter);

app.listen(3000, () => console.log('Rodando...'))