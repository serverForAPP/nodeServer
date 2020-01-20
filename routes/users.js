var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userlist',function (req,res,next) {
  res.send({
    'user': 'lvtao',
    'age': 22
  });
})

module.exports = router;
