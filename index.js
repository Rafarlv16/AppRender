const express = require('express')
const app = express()

fetch('index.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('body').innerHTML = data;
  });



app.listen(3000)