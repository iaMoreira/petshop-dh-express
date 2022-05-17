const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')

router.get('/pets', petController.index);
router.get('/pets/:id', petController.show);
router.post('/pets', petController.create);
router.put('/pets/:id',petController.update);
// router.delete('/pets/:id', (req, res) => res.send('Exclusão de pet: ' + req.params.id));
router.delete('/pets/:id', petController.destroy);

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