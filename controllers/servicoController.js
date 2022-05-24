const Servico = require('../models/servico');

const servicoController = {
    index: (req, res) => {
        const servicos = Servico.findAll();
        return res.render('adm/servicos', { servicos });
    },
    create: (req, res) => {
        return res.render('adm/servicos/cadastro');
    },
    store: (req, res) => {	

    },
    edit: (req, res) => {
        const { id } = req.params;
    },
    update: (req, res) => {
        const { id } = req.params;
    },
    destroy: (req, res) => {
        const { id } = req.params;
    }
}

module.exports = servicoController