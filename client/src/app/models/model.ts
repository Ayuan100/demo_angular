
export class ComputeModel {
	type			: string;
	inPortsNumber	: number;
	outPortsNumber	: number;

	id				: string; //'model-' + type

	nodes 			: Array<ComputeNode>;
	totalIndex		: number; //计数index

	constructor(type:string, inPortsNumber:number, outPortsNumber:number){
		this.type = type;
		this.inPortsNumber = inPortsNumber;
		this.outPortsNumber = outPortsNumber;

		this.id = 'model-' + type;

		
		this.nodes = [];
		this.totalIndex = 0;
	}

	createNode(x: number, y: number, id?){
		this.totalIndex++;
		var node = new ComputeNode(this, x, y, id);
		this.nodes.push(node);
		return node;
	}
}

export class ComputeNode {
	type			: string;
	model_id		: string;
	model			: ComputeModel;

	index			: number;
	name			: string;
	id				: string; //'node-' + type + '-' + defaultname

	inPorts			: Array<Port>;
	outPorts		: Array<Port>;

	x				: number;
	y 				: number;

	constructor(model: ComputeModel, x: number, y: number, node?:any){
		this.model_id = model.id;
		this.model = model;
		this.type = model.type;

		this.index = model.totalIndex;

		if(node) {
			this.id = node.id;
			this.name = node.name;
		}
		else{
			this.id = ('node-' + this.type + '-' + this.index);
			this.name = 'name' + this.index;  //index as default name
		}

		this.inPorts = [];
		this.outPorts = [];

		for(var i = 0; i < model.inPortsNumber; i++){
			var port = new InPort(this, i);
			// console.log(node);
			if(node) port.setId(node.inPorts[i].id);

			this.inPorts.push(port);
		}
		for(var i = 0; i < model.outPortsNumber; i++){
			var port = new OutPort(this, i);
			if(node) port.setId(node.outPorts[i].id);
			this.outPorts.push(port);
		}

		this.moveTo(x, y);

		// console.log('create node', this);
		
	}
	getSchema(){
		return {
			model_type	: this.type,
			// model_id	: this.model_id,
			id 			: this.id,
			name 		: this.name,
			x 			: this.x,
			y 			: this.y
		}
	}
	moveTo(x: number, y:number){
		this.x = x || 0;
		this.y = y || 0;
		this.movePorts();
		// console.log('x:', this.x, ', y:', this.y);
	}
	movePorts(){
		for(var i = this.inPorts.length-1; i >=0 ; i--){
			this.inPorts[i].move();
		}
		for(var i = this.outPorts.length-1; i >=0 ; i--){
			this.outPorts[i].move();
		}
	}

}

export class Port {
	index			: number;
	id				: string; // 'port-'+ node_id + '-' + index
	node 			: ComputeNode;

	isConnected		: boolean;
	connectedPort	: Port;

	line 			: Line;

	ref 			: any;

	constructor(node: ComputeNode, index: number){

		this.index	= index;
		this.id 	= 'port-' + node.id + '-' + index;

		this.node 	= node;
		this.isConnected = false;
		this.connectedPort = null;
		this.line = null;
	}

	getPosition(){
		if(this.ref) return this.ref.getPosition();
	} 
	setId(id){
		this.id = id;
	}
	connect(outport: Port){

		if(this.isConnected == false){
			this.isConnected = true;
			this.connectedPort = outport;
			this.line = new Line(outport, this);
			outport.isConnected = true;
			outport.connectedPort = this;
			outport.line = this.line;
		}
		console.log('connect:', this);
	}
	disconnect(){
		this.isConnected = false;
		this.connectedPort = null;
		this.line = null;
	}
	move(){
		if(this.isConnected && this.line) this.line.paint();
	}
}

export class InPort extends Port {
	connectedPort	: OutPort = null;
	constructor(node: ComputeNode, index: number){
		super(node, index);
		this.id = 'inport-' + node.id + '-' + index;
	}
}

export class OutPort extends Port {
	connectedPort	: InPort = null;
	constructor(node: ComputeNode, index: number){
		super(node, index);
		this.id = 'outport-' + node.id + '-' + index;
	}
}
export class Line {
	// the line from outport to inport
	outport	: OutPort;
	inport	: InPort;

	ref 	: any;

	constructor(outport: OutPort, inport: InPort){
		this.outport = outport;
		this.inport = inport;
	}
	paint(){
		console.log('repaint line');
		if(this.ref) this.ref.paint();
	}
	delete(){
		console.log('delete line');
		this.inport.disconnect();
		this.outport.disconnect();
	}
}