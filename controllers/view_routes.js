// uses date fns to start the party clock!
var formatDistanceToNow = require('date-fns/formatDistanceToNow')
const result = formatDistanceToNow(
    new Date(2022, 7, 13),
    {addSuffix: true})
// pulls in the User model, connection, and creates the router
const User = require('../models/user');
const db = require('../config/db-connection');
const router = require('express').Router(); 
// sets up the root route and renders the handlebar view, and posts the users name to the screen 
router.get('/', (req, res) => {
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
// sets up the route for the register page and renders the handlebar view
router.get('/register', (req, res) => {
    res.render('register', { title: 'register', isHome: false });
});
// sets up the route for the login page and renders the handlebar view
router.get('/login', (req, res) => {
    res.render('login', { title: 'login', isHome: false });
});
// sets up the route for the dashboard and renders the handlebar view
router.get('/dashboard', (req, res) => {
        
        res.render('dashboard', { title: 'Dashboard', isHome: false, friday: result });
    

});




module.exports = router;