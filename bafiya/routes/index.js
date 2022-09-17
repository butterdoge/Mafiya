const mysql = require("mysql");
const config = require("../config");

var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
