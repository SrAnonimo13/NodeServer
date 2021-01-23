const express = require('express')
const app = express()
const server = require('http').createServer(app)

server.listen(3000, ()=>{
    console.log('Server Started')
})
app.use(express.static('public'));