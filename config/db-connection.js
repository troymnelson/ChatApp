const {Sequelize} = require('sequelize');

const connection = new Sequelize(
    'chat-app-db',
    'root',
    'pass',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);


module.exports = connection