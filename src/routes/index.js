const express = require("express");

const signUpRoute = require('./signup');  

const router = express.Router();

router.use("/signup", signUpRoute); 

module.exports = router; 