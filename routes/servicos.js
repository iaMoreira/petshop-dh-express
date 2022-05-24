const express = require('express');
const router = express.Router()
const servicoController = require('../controllers/servicoController');

router.get('/adm/servicos', servicoController.index);
router.get('/adm/servicos/cadastro', servicoController.create);
router.get('/adm/servicos/:id', (req, res) => res.send('Detalhes do serviço: ' + req.params.id));
router.post('/adm/servicos', (req, res) => res.send('Cadastro de serviço'));
router.put('/adm/servicos/:id', (req, res) => res.send('Atualização de serviço: ' + req.params.id));
router.delete('/adm/servicos/:id', (req, res) => res.send('Exclusão de serviço: ' + req.params.id));

module.exports = router;