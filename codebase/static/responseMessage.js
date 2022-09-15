const missingParameter = "Error : Please ensure that you have passed in enough parameters"

const internalException = "Error : Something went wrong at our end!"

const authorizationFailed = "Error : Authorization failed"

const searchFailed = "Error : Sorry! the search for slang failed"

const insertFailed = "Error : Sorry! the insertion failed"

const savingRule = "Error : Sorry! Monthly Savings cannot be more than monthly Income"

const RulePassed = "Success: all parameters are validated!"

const Reciept = `
Hello, your respone  was recieved successfully. 
your response contains
`
const messageSent = "message with response has been sent to customer successfully"

const messageSendingFailed = "Error : Sorry! message sending failed"

const notFound = "Error : Sorry! the content you are looking for was not found"

module.exports = {
    missingParameter, internalException, authorizationFailed,
    searchFailed, insertFailed, savingRule, RulePassed, Reciept, messageSent,
    messageSendingFailed, notFound
};