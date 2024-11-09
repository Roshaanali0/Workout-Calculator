const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllerWorkout");
//this is to get all workouts
router.get("/", controller.getAllWorkouts);

//to GET a si:ngle workout
router.get("/:id", controller.getWorkout);

//to POST or create a new workout
router.post("/", controller.createWorkout);

//to DELETE a workout single
router.delete("/:id", controller.deleteWorkout);

//to UPDATE a workout single
router.patch("/:id", controller.updateWorkout);

module.exports = router;
