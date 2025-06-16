const connection = require("../data/db.js");
// INDEX

const index = (req, res) => {
  const sqlMovie = "SELECT * FROM movies";

  connection.query(sqlMovie, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
  res.json({
    description: "Reading the list of movies",
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

    const movie = results[0];
  });
};

module.exports = { index, show };
