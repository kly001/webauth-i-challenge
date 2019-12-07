const bcrypt = require('bcryptjs')
const router = require('express').Router()

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
  let userInfo = req.body;
  const hash = bcrypt.hashSync(userInfo.password,8);
  userInfo.password = hash;

  Users.add(userInfo)
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