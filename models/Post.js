const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');

class Post extends Model { }

// creates the model for our posts
Post.init(
    {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        underscored: true,
        modelName: 'post',
    }
);



module.exports = Post;
