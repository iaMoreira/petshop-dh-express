const express = require('express');
const router = express.Router()
const servicoController = require('../controllers/servicoController');
const storage = require('../config/storage')

const uploadAvatar = storage('avatar', '/servicos')
router.get('/adm/servicos', servicoController.index);

router.get('/adm/servicos/cadastro', servicoController.create);

router.get('/adm/servicos/:id', servicoController.show);

router.get('/adm/servicos/:id/editar', servicoController.edit);

router.post('/adm/servicos', servicoController.store);

router.put('/adm/servicos/:id', uploadAvatar, servicoController.update);

router.delete('/adm/servicos/:id', servicoController.destroy);

module.exports = router;