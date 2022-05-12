const express = require('express')
const router = express.Router()

router.get('/pets', (req, res) => res.send('Lista de pets'));
router.get('/pets/:id', (req, res) => res.send('Detalhes do pet: ' + req.params.id));
router.post('/pets', (req, res) => res.send('Cadastro de pet'));
router.put('/pets/:id', (req, res) => res.send('Atualização de pet: ' + req.params.id));
router.delete('/pets/:id', (req, res) => res.send('Exclusão de pet: ' + req.params.id));

/* 
    URL Base: http://localhost:3000/{nome_da_rota}
    GET - /pets - Listar todos os pets
    GET - /pets/:id - Listar um pet por ID (/pets/1)
    POST - /pets - Criar um novo pet
    PUT - /pets/:id - Atualizar um pet por ID (/pets/1)
    DELETE - /pets/:id - Deletar um pet por ID (/pets/1)
    ipconfig
*/

module.exports = router;