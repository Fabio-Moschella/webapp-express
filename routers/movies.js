const express = require("express");
const movie = express.Router();
const moviesController = require("../controllers/moviescontroller.js");
// ROUT LISTA (INDEX)
movie.get("", moviesController.index);
// ROUT PER I DETTAGLI DEL BLOG(SHOW)
movie.get("/:id", moviesController.show);

module.exports = movie;
