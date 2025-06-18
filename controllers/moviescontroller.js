const connection = require("../data/db.js");
// INDEX

const index = (req, res) => {
  const sqlMovie = "SELECT * FROM movies";

  connection.query(sqlMovie, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    const movieImgUpdate = results.map((movie) => ({
      ...movie,
      image: `http://localhost:3000/imgs/${movie.image}`,
    }));
    res.json({
      description: "Reading the list of movies",
      movies: movieImgUpdate,
    });
  });
};

//SHOW

const show = (req, res) => {
  const id = parseInt(req.params.id);

  const sqlMovie = "SELECT * FROM movies WHERE id = ?";
  connection.query(sqlMovie, [id], (err, results) => {
    // Qui ho i risultati

    if (err) return res.status(500).json({ error: "Database query failed" });
    if (results.length === 0)
      return res.status(404).json({ error: "movie not found" });
    const result = results[0];
    const movie = {
      ...result,
      image: `http://localhost:3000/imgs/${result.image}`,
    };

    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ?`;
    // Mi scrivo la seconda query
    connection.query(reviewsSql, [id], (err, results) => {
      if (err) return res.status(500).json({ error: "Error executing query" });

      movie.reviews = results;
      res.json({
        movie,
      });
    });
  });
};

module.exports = { index, show };
