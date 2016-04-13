
var express = require('express');
var router = express.Router();
var Band = require('../modeller/bandmodell');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('addband', { 

  	title: 'Express' 

  });

});

router.post('/', function(req, res, next) {

	var rateInt = parseInt(req.body.rate);

	Band.create({

		name: req.body.name,
		place: req.body.place,
		rate: rateInt

	});

	res.redirect('/addband');

});

module.exports = router;
