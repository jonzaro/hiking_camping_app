const express = require('express')
const mongoose = require('mongoose')
const hikingRouter = express.Router()
const Hiking = require("../models/hiking")

// gets ALL routes
hikingRouter.get("/", (req, res, next) => {
    Hiking.find((err, hiking) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200). send(hiking)
    })
})

// gets ONE route by difficulty. Postman = hiking/search/difficulty?difficulty=<number>
// hopefully we can set up something in the front end that can utlize this code so the user can sort how difficult they want their hike to be
hikingRouter.get("/search/difficulty", (req, res, next) => {
    Hiking.find({ difficulty: req.query.difficulty }, (err, hiking) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(hiking)
    })
})

//posts ONE
hikingRouter.post("/", (req, res, next) => {
    const newHike = new Hiking(req.body)
    newHike.save((err, savedHike) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedHike)
    })
})

//deletes ONE
hikingRouter.delete("/:hikingId", (req, res, next) => {
    Hiking.findOneAndDelete({ _id: req.params.hikingId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted "${deletedItem.hikeName}" from the database`)
    })
})

//Updates ONE
hikingRouter.put("/:hikingId", (req, res, next) => {
    Hiking.findOneAndUpdate(
        { _id: req.params.hikingId},  //finds specific one to update
        req.body, //update the object with this data
        { new: true }, //sends back updated version
        (err, updatedHike) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedHike)
        }
    )
})

module.exports = hikingRouter