const express = require('express');
const router = express.Router();
const User = require('../models/User');


//create a user using: POST "/api/auth"
router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    // User(req.body).save();
    res.send(req.body);
});

module.exports = router;