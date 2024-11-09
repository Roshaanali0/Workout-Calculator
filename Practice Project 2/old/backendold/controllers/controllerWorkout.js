const { error } = require("console");
const Workout = require("../models/modelWorkout");
const mongoose = require("mongoose");
//creating a single workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

//getting all workouts from the database
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//deleting a single database from the database
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (workout) {
      res.status(200).json(workout);
    } else {
      return res.status(404).json({ error: "No such workout" });
    }
  } else {
    return res.status(404).json({ error: "No such workout" });
  }
};

//updating a single database from the database
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (workout) {
      res.status(200).json(workout);
    } else {
      return res.status(404).json({ error: "No such workout" });
    }
  } else {
    return res.status(404).json({ error: "No such workout" });
  }
};

//getting a single workout from the database
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const workout = await Workout.findById(id);
    if (workout) {
      res.status(200).json(workout);
    } else {
      res.status(404).json({ message: "no such workout found" });
    }
  } else {
    res.status(404).json({ message: "no such workout found" });
  }
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  deleteWorkout,
  updateWorkout,
  getWorkout,
};
