var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bandSchema = new Schema({

	name: String,
	place: String,
	rate: Number

});

var Band = mongoose.model('User', bandSchema);

module.exports = Band;