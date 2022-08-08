const auth_router = require('express').Router()
const User = require('../models/user')

auth_router.post('/registration', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user){
            return res.send('this user already exists')
        }
        User.create({
            email: req.body.email,
            users_name: req.body.users_name,
            password: req.body.password
        }).then(user => {
            req.session.save(() =>{
                req.session.user_id = user.id    
                res.redirect('/')
            }) 
        })
    })

})

module.exports = auth_router