const { DataTypes } = require("sequelize");
const answers = require("./answers.model")
var db = require('../db/server')

const Questions = db.sequelize.define("questions", {
    questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Questions.belongsTo(answers, {
    foreignKey: "answerId",
})


module.exports = Questions;
