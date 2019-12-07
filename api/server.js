const express = require('express');
const helmet = require('helmet')

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/',(req,res) => {
    res.send("server:<h1>Webauth-i-Challenge</h1>")
  })

module.exports = server;