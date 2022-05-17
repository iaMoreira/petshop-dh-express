const express = require('express');
const router = express.Router()

router.get('/servicos', (req, res) => res.send('Lista de serviços'));
router.get('/servicos/:id', (req, res) => res.send('Detalhes do serviço: ' + req.params.id));
router.post('/servicos', (req, res) => res.send('Cadastro de serviço'));
router.put('/servicos/:id', (req, res) => res.send('Atualização de serviço: ' + req.params.id));
router.delete('/servicos/:id', (req, res) => res.send('Exclusão de serviço: ' + req.params.id));

module.exports = router;