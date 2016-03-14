
var express = require('express');
var router = express.Router();
var Band = require('../modeller/bandmodell');
var mongo

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('addband', { 

  	title: 'Express' 

  });

});

router.post('/addband', function(req, res, next) {

	console.log(req.body);
	res.render('addband');

	Band.create({

		name: "Fu Manchu",
		place: "Sticky Fingers"

	});

});

module.exports = router;
