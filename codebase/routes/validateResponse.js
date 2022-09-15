// question 2

const express = require("express");
const { missingParameter, internalException, savingRule, RulePassed } = require("../static/responseMessage");
const router = express.Router();

// example route to validate reponse

router.post("/validateResponse", (req, res) => {
    try {
        const { monthlyIncome, monthlySavings } = req.body;
        const condition = [monthlyIncome, monthlySavings]
        
        // check if all parameters are present
        if (!condition.every(element => element)) {
            return res.status(422).send(missingParameter)
        }

        // example to check all business rules.
        if (monthlySavings > monthlyIncome) {
            return res.status(422).send(savingRule)
        }

        return res.status(200).send(RulePassed)

    } catch (error) {
        return res.status(500).send(internalException)
    }
})

module.exports = router;