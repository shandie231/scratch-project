const fetch = require('node-fetch')
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdlNWRhNDk2NzMzNTM5NjM3MTNhOTkxYzk0NTExMCIsInN1YiI6IjY0ZTBkYmFkNGE1MmY4MDExZTFlMzFlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U_e_FwP2BIufIF41SVpGXiuuYKM6RsyUfo6DEcE_uBs",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7.9",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
