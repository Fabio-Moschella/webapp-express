const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234!",
  database: "movies",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});
module.exports = connection;
