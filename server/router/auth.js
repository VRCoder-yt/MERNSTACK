const express = require('express')
const user = require('../model/userSchema')
const router = express.Router()

require("../db/conn")
const user = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send(`Hello world from server router.js`)
})

router.post('/register', (req, res) => {
    // console.log(req.body)
    // res.json({clintdata:req.body})

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled the feild properly" });
    }

    user.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(442).json({ error: "user already exist please fill properly" })
            }

            const user = new User({ name, email, phone, work, password, cpassword })

            user.save().then(() => {
                res.status(201).json({ message: "user created successfully" })
            }).catch((err) => {
                res.status(500).json({ message: "failed to register" })
            })

        }).catch(err => { console.log(err) })
})

module.exports = router 