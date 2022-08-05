const router = require('express').Router(); // REQUIRE DA ROUTER

// const User = require('../models/User');

router.get('/', (request, response) => { // RENDER INDEX.HTML ON ROOT ROUTE
    response.render('index')
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});


module.exports = router;