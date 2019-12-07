const bcrypt = require('bcryptjs')
const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's working...it's working ! ! !" });
});


router.post('/hash', (req,res) => {
  // read the password from the body
  const password = req.body.password

  // hash the password
  const hash = bcrypt.hashSync(password,8)

  // return it to the users n a object that looks like
  // {password:'original password', hash:'hashed password'}
  res.status(200).json({password, hash})
 })

module.exports = router;
