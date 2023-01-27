const mongoose = require("mongoose")
const Schema = mongoose.Schema

//hiking blueprint. Subject to change depending on what we want on the form. 

const hikingSchema = new Schema({
    hikeName: {
        type: String
    },
    distance: {
        type: Number
    },
    state: {
        type: String
    },
    elevationGain: {
        type: Number
    },
    difficulty: {
        type: Number
    },
    notes: {
        type: String
    }

})

module.exports = mongoose.model("hiking", hikingSchema)