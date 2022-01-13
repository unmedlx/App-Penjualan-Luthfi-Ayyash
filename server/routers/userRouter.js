const express = require("express");
const { userController } = require("../controllers");

const router = express.Router();

//ROUTER METHOD
router.post("/login", userController.login);

module.exports = router;