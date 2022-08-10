const post_router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
const db = require('../config/db-connection');
// listens for a new post and then creates it
post_router.get('/', async (req, res) => {
    console.log('works!')
    try {
        console.log(req.body);
        const newPost = await Post.create(req.body);

    res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = post_router;