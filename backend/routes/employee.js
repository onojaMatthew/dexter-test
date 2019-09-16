const express = require("express");
const { postEmployee } = require("../controller/employee");

const router = express.Router();

router.post("/employee", postEmployee);

module.exports = router;