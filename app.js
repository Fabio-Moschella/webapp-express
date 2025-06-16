const express = require("express");
const app = express();
const port = 3000;
const movieRouter = require("./routers/movies.js");
const errorHandler = require("./middleware/errorhandler.js");
const cors = require("cors");

const errorNotFound = require("./middleware/errorNotFound.js");

//STATIC ASSEST
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.static("pubblic"));
app.use(express.json());
//ROUTERS
app.use("/movie", movieRouter);

//MIDDLEWARE
app.use(errorHandler);
app.use(errorNotFound);
// IL SERVER E IN ASCOLTO SULLA PORTA 3000
app.listen(port, () => {
  console.log("il server è in ascolto sulla porta " + port);
});
