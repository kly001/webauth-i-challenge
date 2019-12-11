const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');

module.exports = (req, res,next)=> {
    const { username, password } = req.headers;

    // if(!(username && password)) {
    //   res.status(401).json({message:"Invalid Credentials"})
    // } else {
    //   Users.findBy({username})
    //   .first()
    //   .then(user => {
    //     if(user && bcrypt.compareSync(password, user.password)){
    //       next()
    //     } else {
    //       res.status(401).json({message:"Invalid Credentials"})
    //     }
    //   })
    //   .catch((err) => { res.status(500).json({ message: err }) })
    //   }
    // }
    if (req.session && req.session.user) {
      next();
     } else {
       res.status(400).json({ message: 'No credentials provided' });
     }
   };
   

