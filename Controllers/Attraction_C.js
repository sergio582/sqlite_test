const Attraction = require("../Models/Attraction_M");

exports.add_attraction = (req, res) => {
    Attraction.create(req.body).then(() => {
        res.send({ success: true })
    })
}