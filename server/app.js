const express = require('express')
const app = express()
const port = 3000

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
app.get('/login', Middleware, (req, res) => {
    console.log(`welcome to login page`)
    res.send('login!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})