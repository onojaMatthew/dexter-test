const userRoutes = require("../routes/employee");

module.exports = (app) => {
  app.use("/api", userRoutes);
}