const { DataTypes } = require("sequelize");
var db = require('../db/server')

const sheets = db.sequelize.define("sheets", {
    sheetId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = sheets
