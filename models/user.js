
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');

class User extends Model { }

<<<<<<< HEAD
const Post = require('./Post');

=======
>>>>>>> 44d3f6e6cffa5988dbe81b43000fa600e89da6f3
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
