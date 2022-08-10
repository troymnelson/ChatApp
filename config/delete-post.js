const db = require('./db-connection');
const Post = require('../models/Post');

db.sync()
    .then(() => {
        Post.destroy({
            where: {}
        }).then(() => {
            console.log('All Posts Deleted!');
        })
    })