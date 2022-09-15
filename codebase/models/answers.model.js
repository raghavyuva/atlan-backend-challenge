const { DataTypes } = require("sequelize");
var db = require('../db/server')

const answers = db.sequelize.define("answers", {
    answerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    },
});


module.exports = answers;

