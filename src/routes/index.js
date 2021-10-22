const express = require("express");
const app = express(); 
const signUpRoute = require('./signup');  

const router = express.Router();

router.use("/signup", signUpRoute); 

module.exports = router; 