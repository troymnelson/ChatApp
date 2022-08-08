
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');

const Post = require('./Post')

class User extends Model { }

User.init(
  {
    id: {
      Type: DataTypes.NUMBER,
      allowNullq: false,
      primaryKey: true,
      autoIncrement: true
    },
    users_name: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      Type: DataTypes.STRING,
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
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;