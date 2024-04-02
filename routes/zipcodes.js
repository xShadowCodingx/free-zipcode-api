const express = require('express')
const router = express.Router()

const data_handler = require('../data')

// GET all info route
router.get('/all-info', (req, res) => {
    res.send(JSON.stringify(data_handler.rawZipCodes))
})

router.get('/search', (req, res) => {
    if (req.query.by === "city-state-zip") {
        let subArray = []
        data_handler.rawZipCodes.map(d => {
            var zip = d.zip_code
            if (d.zip_code < 10000 && d.zip_code > 999) {
                zip = `0${d.zip_code.toString()}`
            }
            else if (d.zip_code < 1000) {
                zip = `00${d.zip_code.toString()}`
            }
            subArray.push({ "city": d.city, "state": d.state, "zipcode": zip })
        })
        res.send(JSON.stringify(subArray))
    }
    else {
        res.send("You are missing the correct by parameter...")
    }
})

module.exports = router