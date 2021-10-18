const express = require("express")
const app = express()
const cors = require("cors")
const sequelize = require("./database")

//IMPORT ROUTES
const Attractions_R = require("./Routes/Attraction_R")

//MIDDLEWARE
app.use(cors())
app.use(express.json())

app.use("/attractions", Attractions_R)

//DATABASE
try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database:', error)
}

sequelize.sync().then(() => console.log("db ready to use"))

//SERVER START
app.listen(3800)
