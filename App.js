const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Holaaaaa')
})


app.listen(3000)