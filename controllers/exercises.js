const exercises = require("../data/exercises.json")

exports.getAllExercises = (req, res) => {
  res.status(200).json(exercises)
}