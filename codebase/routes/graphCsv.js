// question 3

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const app = require("express");
const { notFound } = require('../static/responseMessage');
const router = app.Router();

router.get("/convertDataCsv", (req, res) => {
    const result = CollectSheets.findAll()
    if (!result) {
        return res.status(404).send(notFound)
    }
    const csvWriter = createCsvWriter({
        path: 'out.csv',
        header: [
            { id: 'id', title: 'question' },
        ]
    });
    csvWriter
        .writeRecords(result)
        .then((resp) => {
            return res.download('out.csv')
        })
})

module.exports = router;