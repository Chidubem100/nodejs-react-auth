const express = require('express');
const router = express.Router();

const {register} = require('../controlller/auth.controller');

router.route('/signUp').post(register);

// login
// refresh


module.exports = router;