const express = require('express')
const router = express.Router()

const data_handler = require('../data')

// GET all info route
router.get('/all-info', (req, res) => {
    data_handler.ZipCodes.findAll().then((data) => {
        res.send(JSON.stringify(data))
    })
})

router.get('/search', (req, res) => {
    if(req.query.by === "city-state-zip"){
        let subArray = []
        data_handler.ZipCodes.findAll().then((data) => {
            data.map(d => subArray.push({"city": d.city, "state": d.state, "zipcode": d.zipCode}))
        }).then(() => {
            res.send(JSON.stringify(subArray))
        })
    }
    else {
        res.send("You are missing the correct by parameter...")
    }
})

module.exports = router