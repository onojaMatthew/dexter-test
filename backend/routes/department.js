const express = require("express");
const { postEmployee } = require("../controller/employee");

const router = express.Router();

router.post("/employee", postEmployee);
router.post("/employee/:employeeId", postEmployee);

module.exports = router;