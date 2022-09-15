// import dependencies

const express = require("express")
const bodyParser = require('body-parser');

// import app components
const translate = require("./routes/translate")
const validate = require("./routes/validateResponse")
const graphCsv = require("./routes/graphCsv")
const sendSms = require("./routes/sendSms")

require("./db/index")

// constant variables
const app = express()
const port = 3000

// make sure our app is able to parse json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// check our app is set up and running successfully
app.get("/", (req, res) => {
    res.send("Hello, this end point is working")
})

// link all the endpoints here
app.use("/api/v1/", translate)
app.use("/api/v1/", validate)
app.use("/api/v1/", graphCsv)
app.use("/api/v1/", sendSms)

// listen to our app on above mentioned port
app.listen(port, () => {
    console.log("app is running on port", port)
})
