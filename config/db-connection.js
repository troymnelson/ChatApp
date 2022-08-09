
const { Sequelize } = require('sequelize');
<<<<<<< HEAD
require('dotenv').config();

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
=======
require('dotenv').config()

const connection = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
>>>>>>> e78a542f8435b2eb1e8e862cf1fe7d2089b75853
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);


module.exports = connection