const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
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
  saveUninitialized: false,

  store: new knexSessionStore ({
    knex: require('../database/db-config.js'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createTable: true,
    clearInterval: 1000 * 60 * 60
  })
}
const server = express();

configureMiddleware(server);

server.use(session(sessionOptions))
server.use('/api', apiRouter);



server.get('/',(req,res) => {
    res.send("server:<h1>Webauth-i-Challenge</h1>")
  })

module.exports = server;