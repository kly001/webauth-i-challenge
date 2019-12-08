const router = require('express').Router();

const Users = require('./users-model.js');
const requiresAuth = require('../auth/requiresAuth')


router.get('/',requiresAuth, (req,res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;