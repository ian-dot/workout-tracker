const router = require("express").Router();
const db = require("../../models");


  //get all info for workouts page
  // /api/workouts
  router.get("/", (req, res) => {
    db.Workout.find({})
      .then((workoutdb) => {
        const lastWorkout = workoutdb[workoutdb.length - 1];
        let durationSum = 0;
        lastWorkout.exercises.forEach((exercise) => {
          durationSum += exercise.duration;
        });
        //add field/totalDuration to last workout
        console.log("durationSum: ", durationSum);
        lastWorkout.totalDuration = durationSum;
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  //get info for a range
  // /api/workouts/range
  router.get("/range", ({}, res) => {
    db.Workout.find({})
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  //submit new completed workouts
  // /api/workouts
  router.post("/", ({ body }, res) => {
    db.Workout.create(body)
    // const Workout = body;
    // db.Workout.save(workout, (err, saved))
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  //update workouts by id
  router.put("/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      // { _id: mongojs.ObjectId(params.id) },
      { _id: req.params.id },
      {
      // { $set: { exercises: req.body } }
      //https://docs.mongodb.com/manual/reference/operator/update/inc/
      //"The $inc operator increments a field by a specified value and has the following form:"
      //this $inc is needed in order to get the new field totalDuration added to workouts that do not have as of yet have it!
      //onlly after adding this, did I see totalDuration field added to the workout I added exercise to!
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
      },
      { new: true }
    )
      .then((workoutdb) => {
        res.json(workoutdb);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  module.exports = router;