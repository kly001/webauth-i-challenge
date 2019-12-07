const express = require('express');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);


server.get('/',(req,res) => {
    res.send("server:<h1>Webauth-i-Challenge</h1>")
  })

module.exports = server;