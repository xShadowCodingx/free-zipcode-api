// This handles the data module for the API

const db = require('./db')

const initial_data = require('./zipcode_data/geo_data')

const insert_zip_data = async () => {
    for(let i = 0; i < initial_data.length; i++){
        var zip

        if(initial_data[i].zip_code < 10000 && initial_data[i].zip_code > 999){
            zip = `0${initial_data[i].zip_code.toString()}`
        }
        else if(initial_data[i].zip_code < 1000){
            zip = `00${initial_data[i].zip_code.toString()}`
        }

        let entry = await db.ZipCodes.create({
            zipCode: zip,
            latitude: initial_data[i].latitude.toString(),
            longtitude: initial_data[i].longitude.toString(),
            city: initial_data[i].city,
            state: initial_data[i].state,
            county: initial_data[i].county
        })
    }
}

module.exports = {
    sequelize: db.sequelize,
    test_db: db.test_db,
    insert_zip_data,
    Users: db.Users,
    ZipCodes: db.ZipCodes
}