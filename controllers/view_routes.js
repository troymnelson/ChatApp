const router = require('express').Router(); // REQUIRE DA ROUTER

// const User = require('../models/User');

router.get('/', (request, response) => { // RENDER INDEX.HTML ON ROOT ROUTE
    response.render('index')
});

router.get('/register', (request, response) => {
    response.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});





module.exports = router;