var formatDistanceToNow = require('date-fns/formatDistanceToNow')
const result = formatDistanceToNow(
    new Date(2022, 7, 13),
    {addSuffix: true})
const User = require('../models/user');
const db = require('../config/db-connection');
const router = require('express').Router(); // REQUIRE DA ROUTER

// const User = require('../models/User');
console.log(result)
router.get('/', (req, res) => { // RENDER INDEX.HTML ON ROOT ROUTE
    if (req.session.user_id){
       
        return User.findByPk(req.session.user_id).then(user => {
            user = {
                 id: user.id,
                 users_name: user.users_name,
                 email: user.email,
                 createdAt: user.createdAt
            }
            res.render('index', { user, isHome: true})
        });
    }
    res.render('index', {title: 'Chat app', isHome: true})
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'register', isHome: false });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'login', isHome: false });
});

router.get('/dashboard', (req, res) => {
        
        res.render('dashboard', { title: 'Dashboard', isHome: false, friday: result });
    

});




module.exports = router;