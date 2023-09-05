const mongoose = require("mongoose");


const dbConnection = (uri) =>{
    try {
        mongoose.connect(uri)
        console.log("DB CONNECTED!!! ")        
    } catch (error) {
        console.error(error)
    }

}

module.exports = dbConnection;



