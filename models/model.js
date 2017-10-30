var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ModelSchema = new Schema({
	type			: String,
	inPortsNumber	: Number,
	outPortsNumber	: Number
});


module.exports = mongoose.model('DemoModel', ModelSchema);