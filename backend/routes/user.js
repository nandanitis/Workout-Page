const express = require('express');
const router  = express.Router()

//contoller functions
const {loginUser, signupUser} = require("../controllers/userContoller");

//login post
router.post('/login',loginUser)

//Signup  post
router.post('/signup',signupUser)

module.exports = router;