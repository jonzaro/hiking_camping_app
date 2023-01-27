const express = require('express')
const mongoose = require('mongoose')
const campingRouter = express.Router()
const Camping = require("../models/camping")

// gets ALL routes
campingRouter.get("/", (req, res, next) => {
    Camping.find((err, camping) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200). send(camping)
    })
})

// gets ONE route by bathrooms. Postman = camping/search/bathrooms?bathrooms=<true/false>
campingRouter.get("/search/bathrooms", (req, res, next) => {
    Camping.find({ bathrooms: req.query.bathrooms }, (err, camping) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(camping)
    })
})

//posts ONE
campingRouter.post("/", (req, res, next) => {
    const newCamp = new Camping(req.body)
    newCamp.save((err, savedCamp) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCamp)
    })
})

//deletes ONE
campingRouter.delete("/:campingId", (req, res, next) => {
    Camping.findOneAndDelete({ _id: req.params.campingId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted "${deletedItem.campsite}" from the database`)
    })
})

//Updates ONE
campingRouter.put("/:campingId", (req, res, next) => {
    Camping.findOneAndUpdate(
        { _id: req.params.campingId},  //finds specific one to update
        req.body, //update the object with this data
        { new: true }, //sends back updated version
        (err, updatedCamp) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedCamp)
        }
    )
})

module.exports = campingRouter