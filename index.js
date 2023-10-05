const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Holaaaaa Mundo')
})


app.listen(3000)