// pulls in sequelize
const { Sequelize } = require('sequelize');

require('dotenv').config();
// creates the connection to our database
const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);


module.exports = connection