//week 17, activity 26

const router = require("express").Router();
const db = require("../models");
const Workout = require("../models/workout");

//create workout
router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//week 18, activity 9. Update workout
app.put("/api/workout/:id", function (req, res) {
    db.Workout.updateOne({ _id: req.params.id }).then(function (dbworkout) {
        res.json(dbworkout);
    });
});


module.exports = router