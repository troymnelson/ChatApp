
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');

const Post = require('./Post')

class User extends Model { }

User.init(
  {
    users_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'user',
  }
);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;