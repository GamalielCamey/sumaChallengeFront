const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");
const app = express();
const cors = require("cors");

//Settings

app.set("port", 3000);
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(express.json());

//Middlewares
app.use(morgan("dev"));

//Routes
app.use(routes);

module.exports = app;
