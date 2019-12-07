const express = require('express');

const server = express();


server.get('/',(req,res) => {
    res.send("server:<h1>Webauth-i-Challenge</h1>")
  })

module.exports = server;