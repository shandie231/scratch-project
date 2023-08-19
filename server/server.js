const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const ATLAS_URI =
  "mongodb+srv://jas0430:Wr5ilCG1o2EQmSe@wpt-42.yjrdn5e.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //error handling incase connection to Atlas Db is not working.
  .then(() => {
    console.log("Successful connection to Atlas Db");
  })
  .catch(() => {
    console.log("Unsuccessful connection to Atlas Db");
  });

const options4Shows = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdlNWRhNDk2NzMzNTM5NjM3MTNhOTkxYzk0NTExMCIsInN1YiI6IjY0ZTBkYmFkNGE1MmY4MDExZTFlMzFlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_e_FwP2BIufIF41SVpGXiuuYKM6RsyUfo6DEcE_uBs",
  },
};

// statically serve everything in the build folder on the route '/build'
app.use("/build", express.static(path.join(__dirname, "../build")));
// serve index.html on the route '/'
//=========place this back==============//
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});
//=========place this back==============//
app.get("/fetchData", (req, res) => {
  fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.9",
    options4Shows
  )
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
});

const TVShowRouter = express.Router();
app.use("/TVShow", showRouter);

// Create a show in the database
// http://localhost:3000/student
showRouter.post("/", studentController.createStudent);

// Get a show from the database
// http://localhost:3000/student/"name"
showRouter.get("/:name", studentController.getStudent);

// Change a shows name
// http://localhost:3000/student/"name"
showRouter.patch("/:name", studentController.updateStudent);

// Delete a show from the database
// http://localhost:3000/student/"name"
showRouter.delete("/:name", studentController.deleteStudent);

// Unknown route handler, incase client is requesting anything outside of scope
app.use((req, res) => res.sendStatus(404));

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

module.exports = app;
