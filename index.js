const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendfile('index.hmtl')
})


app.listen(3000)