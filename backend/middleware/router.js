const employeeRoutes = require("../routes/employee");

module.exports = (app) => {
  app.use("/", employeeRoutes);
}