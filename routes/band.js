var express = require('express');
var router = express.Router();

var Band = require('../modeller/bandmodell');

/* GET home page. */
router.get('/', function(req, res, next) {
  
	Band.find( ).then(function(element) {

		res.render('/band', { 

  			band: element 

  		});

  	});

});


module.exports = router;
