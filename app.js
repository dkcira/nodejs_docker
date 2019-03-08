// app.js

const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/docker', (req, res) => {
    res.send("hello from docker!");
})

app.get('/nodemon', (req, res) => res.send('hello from nodemon 1!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))