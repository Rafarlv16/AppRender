const express = require('express')
const app = express()
const path = require('path')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'index.hmtl'))
})


app.listen(3000)