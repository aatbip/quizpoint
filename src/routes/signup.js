const express = require('express');
const userSignUp = require('../controllers/Signup'); 

const router = express.Router();

router.post("/", userSignUp); 

module.exports = router; 