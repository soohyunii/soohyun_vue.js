var express = require('express');
var path=require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });  기본설정
  res.sendFile(path.join(_dirname,'../public','index.html'))
});

module.exports = router;
