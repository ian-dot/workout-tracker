const router = require("express").Router();

const workoutRoutes = require("./workout-routes.js");

router.use("/workouts", workoutRoutes);

module.exports = router;