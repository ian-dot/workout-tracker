const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes")


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    });


// Start the server
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}/`);
  });