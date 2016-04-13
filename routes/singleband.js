var express = require('express');
var router = express.Router();
var Band = require('../modeller/bandmodell');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  
	Band.findById( req.params.id ).then(function(element) {

 		res.render('singleband', { 

	  		title: element.name,
	  		singleBand: element

		});

	});

});

module.exports = router;
