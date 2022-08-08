const User = require('../models/user');

const router = require('express').Router(); // REQUIRE DA ROUTER

// const User = require('../models/User');

router.get('/', (req, res) => { // RENDER INDEX.HTML ON ROOT ROUTE
    if (req.session.user_id){
       
        return User.findByPk(req.session.user_id).then((user) => {
            console.log(user)
            res.render('index', {userdata: user})
        })
    }
    console.log(req.session.user_id)
    res.render('index', {title: 'Chat app', isHome: true})
});

router.get('/register', (req, res) => {
    res.render('register', {title: 'register', isHome: false});
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'login', isHome: false});
});





module.exports = router;