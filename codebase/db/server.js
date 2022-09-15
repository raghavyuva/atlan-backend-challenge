const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'ATLAN_CHALLENGE',
    'root',
    'raghav',
    {
        host: '127.0.0.1',
        dialect: 'mariadb'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;