const workouts = require("../data/workouts.json")

exports.getAllWorkouts = (req, res) => {
  res.status(200).json(workouts)
}