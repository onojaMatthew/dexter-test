const mongoose = require("mongoose");
const winston = require("winston");
require("dotenv").config();

module.exports = function() {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    winston.info("Connection to database established!");
  })
  .catch(err => {
    winston.error(`Connection to database failed. ${err.message}`);
  });
}