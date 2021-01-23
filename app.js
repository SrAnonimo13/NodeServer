const express = require('express')
const app = express()
const server = require('http').createServer(app)

server.listen(3000, ()=>{
    console.log('Servidor Iniciado')
})
app.use(express.static('public'));