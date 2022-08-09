const post_router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const db = require('../config/db-connection');

post_router.post('/', async (req, res) => {
    console.log('works!')
    try {
        console.log(req.body);
        const newPost = await Post.create(req.body);
        
        req.session.post_id = newPost.id;
        res.redirect('/dashboard');
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = post_router;