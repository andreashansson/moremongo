var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bandSchema = new Schema({

	name: {
		
		type: String,
		required: true
		
	},

	place: {
	
		type: String,
		required: true
	
	},
	
	rate: {
	
		type: Number
	
	}

});
					//denna | sätter namn på collectionen
var Band = mongoose.model('Band', bandSchema);

module.exports = Band;