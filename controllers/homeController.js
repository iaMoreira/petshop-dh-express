const db = require('../db.json')

const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira aplicação com ejs';
        res.render('home', { title });
    },
    sobre: (req, res) => {
        res.render('home/sobre');
    },
    servicos: (req, res) => {
        const servicos = db.servicos;
        res.render('home/servicos', { servicos });  
    },
    login: (req, res) => {
        res.send('Login');
    }
}

module.exports = homeController;
