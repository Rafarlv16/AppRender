const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile('kiniii chivato')
})


app.listen(3000)