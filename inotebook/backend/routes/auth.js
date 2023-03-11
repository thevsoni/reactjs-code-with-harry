const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Harryisagoodb$oy";

//Route 1 : create a user using: POST "/api/auth"
router.post('/createuser', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password must be atleast 5 char').isLength({ min: 5 }),
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("some error , user is not added");
            return res.status(400).json({ errors: errors.array(), message: "user is not added" });
        }
        try {


            let user = await User.findOne({ email: req.body.email });
            if (user) {
                console.log("some error , user is not added");
                return res.status(400).json({ errors: "email exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            //create a new user
            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email,
            });
            // res.json(user); now we will not send user data to user instead, we will send token now jwt
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            res.json({ authtoken });
            console.log(authtoken);
            console.log("user added successfully")
        } catch (err) {
            console.log("some error");
            res.status(500).send("some error occured, so user not added");
        }

    });

//Route 2:authenticate a user using :post /api/auth/login
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    body('password', 'pwd cant be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('email or pwd or both are incorrect')
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            console.log("email doesnt exists")
            return res.status(400).json({ error: "pls try to login with correct creds" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare) {
            console.log("pwd wrong")
            return res.status(400).json({ error: "pls try to login with correct creds" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        console.log("login successfull")
        console.log(authtoken)
        res.json({ authtoken });
    } catch (error) {
        console.log("some error = ", error.message);
        res.status(500).send("internal server error");
    }
})

module.exports = router;





/*
// previous code 
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

*/