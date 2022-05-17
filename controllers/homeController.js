const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira aplicação com ejs';
        res.render('home', { title });
    },
    login: (req, res) => {
        res.send('Login');
    }
}

module.exports = homeController;
