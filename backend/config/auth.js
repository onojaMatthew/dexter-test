const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(403).json("Access denied. No token was provided");

  try {
    const decode = jwt.verify(token, process.env.PRIVATE_KEY);
    req.user = decode;
    next();
  }
  catch(err) {
    res.status(401).json("Invalid token.")
  }
}