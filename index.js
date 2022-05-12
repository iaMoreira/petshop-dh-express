const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');

app.use(petsRouter);

// rotas dos serviços

app.get('/', (req, res) => {
    res.send('Olá mundo!');
})

app.listen(3000, () => console.log('Rodando...'))