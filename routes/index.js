var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	
	res.render('index', { title: 'Express', name: '<p>我是段落P</p>' });
});

module.exports = router;
