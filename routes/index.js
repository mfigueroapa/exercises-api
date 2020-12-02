const express = require('express');
const router  = express.Router();
const {
  getAllExercises
} = require('../controllers/exercises')
const {
  getAllWorkouts
} = require('../controllers/workouts')

/* GET home page */
router.get('/exercises', getAllExercises)

router.get('/workouts', getAllWorkouts)

module.exports = router;
