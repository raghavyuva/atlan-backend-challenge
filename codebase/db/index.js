const db = require("./server")
require("../models/answers.model")
require("../models/quetions.model")
require("../models/question_answer.model")

db.sequelize.sync().then(() => {
    console.log('table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
