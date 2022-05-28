const express = require('express');
const router = express.Router();
const {userRegistration, userLogin} = require('../controllers/authController');

 
// Type :  POST
// Route: /api/auth/registration
// desc : Route for user registration
// Access : Public
router.post('/registration' , userRegistration)

// Type :  POST
// Route: /api/auth/login
// desc : Route for user login
// Access : Public
router.post('/login' , userLogin)


module.exports = router;