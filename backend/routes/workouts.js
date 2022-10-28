const express = require("express");
const {
  createWorkout,
  getworkouts,
  getworkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");


//require auth fir all 
const requireAuth =  require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

//TO GET ALL WORKOUTS
router.get("/", getworkouts);

//GET SINGLE WORKOUT
router.get("/:id", getworkout);

//POST A NEW WORKOUT
router.post("/", createWorkout);

//DELETE A NEW WORKOUT
router.delete("/:id", deleteWorkout);

//UPDATE A NEW WORKOUT
router.patch("/:id", updateWorkout);

module.exports = router;
