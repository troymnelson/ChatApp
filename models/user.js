
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connection');

class User extends Model { }

User.init(
  {
    id: {
      Type: DataTypes.NUMBER,
      allowNullq: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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



module.exports = User;
