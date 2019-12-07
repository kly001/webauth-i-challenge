
const router = require('express').Router()

const Users = require('../users/users-model.js');

router.post('/register', (req,res) => {
    let user = req.body;

    Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

router.post('./login',(req,res) => {

})

module.exports = router