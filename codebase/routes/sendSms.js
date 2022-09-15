// question 4

// example api keys
const accountSid = "akjdhawiudyqwai2"
const authToken = "wfwyfe7yqw8adya";

const client = require('twilio')(accountSid, authToken);
const { missingParameter, internalException,
    Reciept, messageSent, messageSendingFailed } = require("../static/responseMessage");

const app = require("express")

const router = app.Router();


router.post("/webhook/sendsms", (req, res) => {
    try {

        // response from the user
        const { customerNo, customerId, customerName, customerPinCode } = req.body;

        const condition = [customerId, customerName, customerNo, customerPinCode];

        if (!condition.every(element => element)) {
            return res.status(422).send(missingParameter)
        }

        // send message to customer

        const message = client.messages
            .create({
                body: Reciept +
                    'Customer Id : ' + `${customerId}` +
                    "Customer Name : " + `${customerName}` +
                    "Customer Pin Code : " + `${customerPinCode}`,
                // example from number
                from: '238423872332',
                to: customerNo
            })

        if (!message?.sid) {
            return res.status(500).send(messageSendingFailed)
        }

        return res.status(200).send(messageSent)

    } catch (error) {
        return res.status(500).send(internalException)
    }
})

module.exports = router