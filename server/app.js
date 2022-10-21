const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

//Mondo DB SSH key
const DB = 'mongodb+srv://rohit:7IDrvLbfTJJcunUp@cluster0.prkjs37.mongodb.net/MERNSTACKOFFCIAL?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Connection Successful`);
}).catch((err) => console.log(`no connection`));

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
