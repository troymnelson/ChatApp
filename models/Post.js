const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');

class Post extends Model { }


Post.init(
    {
        id: {
            Type: DataTypes.NUMBER,
            allowNullq: false,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            Type: DataTypes.STRING,
            allowNullq: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);



module.exports = Post;
