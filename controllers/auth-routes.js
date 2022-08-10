const auth_router = require('express').Router()
const { Router } = require('express')
const Post = require('../models/Post')
const User = require('../models/user')
const { Timer } = require('timer-node');
const timer = new Timer({ label: 'test-timer' });


auth_router.post('/registration', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
        // checks if the user has made an account already
    }).then(user => {
        if (user) {
            return res.send('this user already exists')
        }
        // if not it creates a new account
        User.create({
            email: req.body.email,
            users_name: req.body.users_name,
            password: req.body.password
        }).then(user => {
            req.session.save(() => {
                req.session.user_id = user.id
                res.redirect('/')
            })
        })
    })

})

auth_router.post('/logged', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(async user => {
        // makes sure that thers not already a user with that name 
        if (!user) {
            return res.redirect('/login')
        }

        const pass_valid = await user.validatePassword(req.body.password, user.password)
        // checks if the password is valid 
        if (!pass_valid) {
            return res.redirect('/login')
        }
// if it is then it logs you in
        req.session.save(() => {
            timer.start();
            console.log(timer.isStarted());
            req.session.user_id = user.id;
            res.redirect('/dashboard')
        })
    })

})


auth_router.get('/logout', (req, res) => {
// checks that youre logged in 
    if (!req.session.user_id) return res.redirect('/');
// if you are it destroys your current session
    req.session.destroy(() => {
        const time = timer.time();
        res.redirect('/', time);
    });
})


module.exports = auth_router