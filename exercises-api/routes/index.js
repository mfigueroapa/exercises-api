const express = require('express');
const router  = express.Router();
const exercises = require("../data/exercises.json")

/* GET home page */
router.get("/getExercises", (req, res, next) => {
  console.log("ex ", exercises)
  res.json(exercises)
})

module.exports = router;
