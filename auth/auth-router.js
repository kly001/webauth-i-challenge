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

router.post('/login',(req,res) => {
  let {username,password} = req.body

  Users.findBy({username})
  .first()
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)) {
     
      req.session.user = user

      res.status(200).json({message:`Congratulations, ${user.username}. You are now logged in !`})
    } else {
      res.status(401).json({message:'Invalid credentials'})
    }
  })
  .catch(err => {
    res.status(500).json(err)
  })

})

router.delete('/logout', (req,res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if(err) {
        res.status(400).send('You cannot leave !');
      } else {
        res.send("You made it out.  Later 'gator !")
      }
    })
  } else {
    res.end();
  }
})

module.exports = router