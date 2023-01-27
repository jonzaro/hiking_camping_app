const mongoose = require("mongoose")
const { stringify } = require("querystring")
const Schema = mongoose.Schema

//camping blueprint. Subject to change depending on what we want on the form.

const campingSchema = new Schema({
    campsite: {
        type: String
    },
    state: {
        type: String
    },
    bathrooms: {
        type: Boolean
    },
    size: {
        type: Number
    },
    cost: {
        type: Number
    },
    rating: {
        type: Number
    },
    notes: {
        type: String
    }
})

module.exports = mongoose.model("camping", campingSchema)
