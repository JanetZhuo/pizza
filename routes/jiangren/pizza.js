var express = require('express');
var router = express.Router();

/* GET pizza page. */
router.get('/', function(req, res, next) {
  res.json('fjyfj');
});

module.exports = router;
