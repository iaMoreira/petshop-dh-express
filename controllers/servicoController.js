const Servico = require('../models/servico');

const servicoController = {
    index: (req, res) => {
        const servicos = Servico.findAll();
        return res.render('adm/servicos', { servicos });
    },
    show: (req, res) => {
        const {id} = req.params;
        const servico = Servico.findById(id);

        return res.render('adm/servicos/detalhes', {servico}); // endereço do arquivo ejs
    },
    create: (req, res) => {
        return res.render('adm/servicos/cadastro'); // endereço do arquivo ejs 
    },
    store: (req, res) => {
        const { nome, imagem, preco, ativo, descricao } = req.body
        const servico = {
            nome,
            descricao,
            imagem: 'https://www.mypetbrasil.com/blog/wp-content/uploads/2020/02/Aumente-as-vendas-no-seu-Pet-Shop.jpg',
            preco,
            ativo: (ativo ? true : false)
        };

        Servico.save(servico)

        return res.redirect('/adm/servicos'); // endpoint ou routes
    },
    edit: (req, res) => {
        const {id} = req.params;
        const servico = Servico.findById(id);

        return res.render('adm/servicos/editar', {servico});
    },
    update: (req, res) => {
        const { id } = req.params;
        const { nome, imagem, preco, ativo, descricao } = req.body
        
        const servico = {
            id,
            nome,
            descricao,
            imagem,
            preco,
            ativo: (ativo ? true : false)
        };
        Servico.update(id, servico)

        return res.redirect('/adm/servicos'); // endpoint ou routes
    },
    destroy: (req, res) => {
        const { id } = req.params;
        Servico.delete(id);
        
        return res.redirect('/adm/servicos');
    }
}

module.exports = servicoController