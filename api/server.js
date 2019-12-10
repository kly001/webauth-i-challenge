const session = require('express-session');
const express = require('express');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');


const sessionOptions = {
  name: "boogie",
  secret: "damianisthesecret",
  cookie: {
    maxAge: 1000*60*60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
}
const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);
server.use(session(sessionOptions))


server.get('/',(req,res) => {
    res.send("server:<h1>Webauth-i-Challenge</h1>")
  })

module.exports = server;