

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var queries = require('../queries/apiQueries')
var list = require('./list');
var connections = require('./connections')



/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("HELLLO");
  res.json({message: "hello"})
});

module.exports = router;
