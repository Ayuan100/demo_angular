var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserDataSchema = new Schema({
	user 	: String,
	models	: [{
		model_type		: String,
		inPortNumber	: Number,
		outPortNumber	: Number,
		nodes 	: [{
			id 			: String,
			name 		: String,
			model_type 	: String,
			x 			: Number,
			y 			: Number,
			inPorts 	: [{
					id 			: String,
					isConnected : Boolean,
					connectedPortId: String
			}],
			outPorts	: [{
					id 			: String,
					isConnected : Boolean,
					connectedPortId: String
			}]
		}]
	}]
	
});
UserDataSchema.methods.createNode = function(node) {
	for( var i = 0; i < this.models.length; i++){
		var model = this.models[i];
		if(model.model_type == node.model_type){
			node.inPorts = [];
			node.outPorts = [];
			for(var j = 0; j < model.inPortNumber; j++){
				node.inPorts.push({
					id : 'inport-' + node.id + '-' + j,
					isConnected: false,
					connectedPortId: null
				})
			}
			for(var j = 0; j < model.outPortNumber; j++){
				node.outPorts.push({
					id : 'outport-' + node.id + '-' + j,
					isConnected: false,
					connectedPortId: null
				})
			}
			model.nodes.push(node);
		}
	}
};
UserDataSchema.methods.findPortById = function(id){
	for( var i = 0; i < this.models.length; i++){
		var nodes = this.models[i].nodes;
		for( var j = 0; j < nodes.length; j++){
			var inports = nodes[j].inPorts;
			for( var k = 0; k < inports.length; k++){
				var port = inports[k];
				if(port.id == id){
					return port;
				}
			}

			var outports = nodes[j].outPorts;
			for( var k = 0; k < outports.length; k++){
				var port = outports[k];
				if(port.id == id){
					return port;
				}
			}
		}
	}
	console.log('port not found!!!!: ', id);
	return null;
};

UserDataSchema.methods.findNodeById = function(id){
	for( var i = 0; i < this.models.length; i++){
		var nodes = this.models[i].nodes;
		for( var j = 0; j < nodes.length; j++){
			if(nodes[j].id == id) return nodes[j];
		}
	}
	return null;
};
UserDataSchema.methods.moveNode = function(id, x, y){
	var node = this.findNodeById(id);
	if(node){
		node.x = x;
		node.y = y;
	}
}

UserDataSchema.methods.connectPort = function(outportId, inportId){
	var outport = this.findPortById(outportId);
	var inport = this.findPortById(inportId);
	if(outport && inport){
		outport.isConnected = true;
		outport.connectedPortId = inportId;

		inport.isConnected = true;
		inport.connectedPortId = outportId;
	}
};
UserDataSchema.methods.disconnectPort = function(outportId, inportId){
	var outport = this.findPortById(outportId);
	var inport = this.findPortById(inportId);
	if(outport && inport){
		outport.isConnected = false;
		outport.connectedPortId = null;

		inport.isConnected = false;
		inport.connectedPortId = null;
	}
};

UserDataSchema.pre('find', function(next) {
  this.populate('children')
  next()
});

module.exports = mongoose.model('DemoUserData', UserDataSchema);