var express = require('express');
var router = express.Router();

var users = [
  {
    email: 'abc@gadam.com', password: 'password'
  }
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('welcome to backend server!');
});

router.post('/login', function (req, res) {
  const result = users.find(user => user.email === req.body.email);
  if (result) {
    if (result.password === req.body.password) {
      res.status(200).send(
        {
          message: 'successful login!'
        }
      )
    } else {
      res.status(200).send( {
        message: 'Password incorrect!'
      })
    }
  } else {
    res.status(200).send( {
      message: 'user not found!'
    })
  }
})

module.exports = router;
