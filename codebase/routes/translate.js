// question 1 

const express = require("express");
const { Op } = require("sequelize");
const { Translate } = require('@google-cloud/translate').v2;
const answersModel = require("../models/answers.model")

const { missingParameter, internalException, authorizationFailed, SearchFailed, InsertFailed } = require("../static/responseMessage");
const router = express.Router();
// google translate project key goes here
const key = "ajgwasjhgdasgd"

const translate = new Translate({ key });

router.post("/insert/answers", (req, res) => {
    try {
        const { answer, userId } = req.body;

        if (!answer) {
            return res.status(422).send(missingParameter)
        }

        // perform some authentication here or use middleware 
        if (userId != "1234") {
            return res.status(401).send(authorizationFailed)
        }

        const result = answersModel.create({ answer })
        if (!result) {
            return res.status(404).send(InsertFailed)
        }

        return res.status(200).send(result)

    } catch (error) {
        console.log(error)
        return res.status(500).send(internalException)
    }
})

router.post("/translate/", async (req, res) => {
    try {

        // city and slang being passed from frontend
        const { searchTerm, userId, city } = req.body;

        const condition = [searchTerm, userId, city];

        // check whether we have all the required parameters to process
        if (!condition.every(element => element)) {
            return res.status(422).send(missingParameter)
        }

        // perform some authentication here or use middleware 
        if (userId != "1234") {
            return res.status(401).send(authorizationFailed)
        }

        const [translatedText] = await translate.translate(searchTerm, "en");

        // if translation outputs null or undefined
        if (!translatedText) {
            return res.status(404).send(SearchFailed)
        }

        const options = {
            limit: 10,
            where: {
                answer: {
                    [Op.like]: '%' + translatedText + '%'
                }
            },
        };

        const result = await answersModel.findAll(options)

        if (!result) {
            return res.status(404).send(SearchFailed)
        }

        return res.status(200).send(result);

    } catch (error) {
        console.log(error)
        return res.status(500).send(internalException)
    }
})

module.exports = router