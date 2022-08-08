const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'chat_app_db',
    'root',
    'pass',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);


module.exports = connection