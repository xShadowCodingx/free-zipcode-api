// This is the main entry point for the API
const express = require('express')
const app = express()
const port = 3000

const data_handler = require('./data')
const routes = require('./routes')

// Initialize database
data_handler.sequelize.sync({ force: false })
// Uncomment to insert zipcode data
// .then(() => {
//     data_handler.insert_zip_data()
// })

app.get('/', (req, res) => {
    console.log(process.cwd())
    res.send("Sup")
})

app.use(routes.zipcodes)

app.listen(port, async () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app