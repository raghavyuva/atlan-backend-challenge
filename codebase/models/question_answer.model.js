const { DataTypes } = require("sequelize");
const answers = require("./answers.model")
const questions = require("./quetions.model")
var db = require('../db/server')

const questionAnswers = db.sequelize.define("questionAnswers", {
    qaId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
});

questionAnswers.belongsTo(answers, {
    foreignKey: "answerId",
});

questionAnswers.belongsTo(questions, {
    foreignKey: "questionId",
})


module.exports = questionAnswers;