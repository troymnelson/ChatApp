const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');

class Post extends Model { }


Post.init(
    {
        id: {
            Type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            Type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            Type: DataTypes.STRING,
            allowNull: false
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
