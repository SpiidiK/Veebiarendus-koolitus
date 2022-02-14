const express = require('express')
const app = express()
app.get('/', function(reg, res){
    res.end('Tere Maailm!')
})
app.listen(3000)