//IMPORTS
const express = require("express");
const { add_attraction } = require("../Controllers/Attraction_C")

//MIDDLEWARE
const router = express.Router();

//CREATE ATTRACTION
router.post("/", add_attraction);

module.exports = router;