/** Requiring modules */

const express = require("express");
const path = require("path");
const winston = require("winston");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const coookieParser = require("cookie-parser");
const db = require("./config/db");

// =================================================
// Instantiating express app 
// =================================================
const app = express();

const port = process.env.PORT || 4200;

// =================================================
// Connecting to the database
// =================================================
db();

// =================================================
// Middlewares
// =================================================
app.use('/files', express.static(path.resolve(__dirname, 'files')));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(coookieParser());

app.use((req, res, next) => {
  res.locals = {
    userType: "startup",
  }
  next();
})
//==================================================
// Setting up Cross Origin Resource Sharing
//==================================================
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept, X-Auth-Token');

  next();
});

// =================================================
// express routers
// =================================================
require("./config/error-logger")();
require("./middleware/router")(app);

// ================================================
// Starting the server 
// ================================================
app.listen(port, (err) => {
  if (err) {
    winston.error(`Something went wrong while starting the server. ${err.message}`);
  }
  winston.info(`Server is up and listening on port ${port}`);
});

