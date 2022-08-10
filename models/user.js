
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');
const bcrypt = require('bcrypt')

const Post = require('./Post')

class User extends Model { }
// creates the model for our users
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

    hooks: {
      async beforeCreate(user) {
        const hashed_pass = await bcrypt.hash(user.password, 10);
        user.password = hashed_pass;
      }
    }
  });
// adds a prototype function to our users to check the password
User.prototype.validatePassword = async function (password, stored_password) {
  return await bcrypt.compare(password, stored_password);
}
// creates the foregin key relationship
User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;