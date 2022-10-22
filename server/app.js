const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const port = 3000

//Mondo DB SSH key
// password and username must be alphabate because special words must be need decode

// NOT RECOMMENDED FOR SECURITY PURPOSE
// const DB = 'mongodb+srv://rohit:XXXXXXX@cluster0.prkjs37.mongodb.net/MERNSTACKOFFCIAL?retryWrites=true&w=majority'

dotenv.config({ path: './config.env' })
require('./db/conn') // require conn.js from db

const PORT = process.env.PORT;

// // MongoDB connect
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
// }).then(() => {
//     console.log(`Connection Successful`);
// }).catch((err) => console.log(err));
// // MongoDB Connected

//Middleware 
const Middleware = (req, res, next) => {
    console.log(`Hello My middlwware`);
    next();
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us!')
})

app.get('/contact', (req, res) => {
    res.send('contact us!')
})

app.get('/login', Middleware, (req, res) => { // usingf middleware commonly in login page
    console.log(`welcome to login page`)
    res.send('login!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
