const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const workoutRoutes = require("./backend/routes/routeWorkouts");
const userRoutes = require("./backend/routes/userRoutes")

dotenv.config();

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`The server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//listen for requests
