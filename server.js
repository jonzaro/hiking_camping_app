const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")

app.use(express.json()) //this looks for the request body and truns it into "req.body"
app.use(morgan('dev')) // logs requests to the console so it's easier to see

mongoose.connect("mongodb+srv://hike_camp:123@hike.h2yjj2q.mongodb.net/?retryWrites=true&w=majority", () => console.log("database is running!"))

app.use("/hiking", require("./routes/hikingRouter"))
app.use("/camping", require("./routes/campingRouter"))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(5000, () => {
    console.log("The server is running on port 4000")
})