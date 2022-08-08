const router = require('express').Router(); // REQUIRE DA ROUTER

// const User = require('../models/User');

router.get('/', (request, response) => { // RENDER INDEX.HTML ON ROOT ROUTE
    response.render('index', {title: 'Chat app', isHome: true})
});

router.get('/register', (request, response) => {
    response.render('register', {title: 'register', isHome: false});
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'login', isHome: false});
});





module.exports = router;