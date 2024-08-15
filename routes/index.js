var express = require('express');

var router = express.Router();

const confige=require("../config");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',confige});
});

module.exports = router;
