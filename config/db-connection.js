const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    'chat_app_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);


module.exports = connection