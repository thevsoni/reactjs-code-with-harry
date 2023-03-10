const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//create a user using: POST "/api/auth"
router.post('/', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 char').isLength({ min: 5 }),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: "email exists" });
        }

        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });
        res.json(user);

        // User.create({
        //     name: req.body.name,
        //     password: req.body.password,
        //     email: req.body.email,
        // }).then(user => res.json(user))
        //     .catch((err) => {
        //         console.log("this is error = " + err);
        //         res.json({ erro: "please enter unique mail", message: err.message });
        //     })
        // console.log(req.body);
        // const user = User(req.body);
        // user.save();
        // User(req.body).save();
        // res.send(req.body);
    });

module.exports = router;