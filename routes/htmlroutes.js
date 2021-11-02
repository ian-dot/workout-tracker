const router = require("express").Router();
const path = require("path");


  // GET Route for homepage      
  router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // GET Route for exercise page
  router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // GET Route for stats
  router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports = router;