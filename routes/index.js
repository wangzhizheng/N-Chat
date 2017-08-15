var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.cookies.user==null){
    res.redirect('/signin');
  }
  else
  {
    //Todo: add users to users[]
    res.sendfile('views/index.html');
  }
});

router.get('/signin',function(req,res){
  res.sendfile('views/signin.html');
});

router.post('/signin',function(req,res){
    if (!users[req.body.name]) {
        //if not exists, save the username into cookie and redirect to homepage;
        res.cookie("user", req.body.name, {maxAge: 1000 * 60 * 60 * 24 * 30});
        res.redirect('/');
    } else res.redirect('/signin');
});
module.exports = router;
