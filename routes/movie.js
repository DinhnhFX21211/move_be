const express = require("express");

const movieController = require("../controllers/movie");

const router = express.Router();

//Route Trending
router.get("/api/movies/trending/:page", movieController.getMovieTrending);
//Route TopRate
router.get("/api/movies/top-rate/:page", movieController.getMovieRating);
//Route Discovery
router.get(
  "/api/movies/discover/:genre/:page",
  movieController.getMovieDiscover
);
//Route Trailer
router.post("/api/movies/video", movieController.postMovieVideo);
//Route Search
router.post("/api/movies/search", movieController.postMovieSearch);
//getMovieGenreList
router.get("/api/movies/genreList", movieController.getMovieGenreList);
//getMovieMediaType
router.get("/api/movies/mediaType", movieController.getMovieMediaType);

module.exports = router;
