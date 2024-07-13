var express = require('express');
var router = express.Router();

const fs = require('fs');
const { v4: uuidv4 } = require('uuid')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
