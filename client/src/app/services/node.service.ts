import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import { ComputeModel, ComputeNode, Port } from '../models/model';

@Injectable()
export class NodeService {
  userData : Array<ComputeModel> = [];

  constructor(private http: Http) {
  	this.fetchUserData();
  }

  getModels(){
  	return this.userData;
  }
  getUserData(){
  	return this.userData;
  }

  createNode(model: ComputeModel, x, y){
    var node = model.createNode(x,y).getSchema();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('/update/createNode', JSON.stringify(node), {headers: headers})
              .map(res => res.json())
              .subscribe(id => {
                  console.log('create node:', node.name);
              });
  }

  moveNode(node: ComputeNode, x, y){
    node.moveTo(x,y);

    var data = {
      id   : node.id,
      x    : x,
      y    : y
    };

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('/update/moveNode', JSON.stringify(data), {headers: headers})
              .map(res => res.json())
              .subscribe(id => {
                  console.log('move node:', data);
              });
  }

  disconnectPort(outport: Port, inport: Port){
    var connection = {
      outPortId: outport.id,
      inPortId: inport.id
    };
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('/update/disconnectPort', JSON.stringify(connection), {headers: headers})
              .map(res => res.json())
              .subscribe(id => {
                  console.log('disconnect port:', connection);;
              });;
    
  }

  connectPort(outport: Port, inport: Port){
    var connection = {
      outPortId: outport.id,
      inPortId: inport.id
    };
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('/update/connectPort', JSON.stringify(connection), {headers: headers})
              .map(res => res.json())
              .subscribe(id => {
                  console.log('connect port:', connection);;
              });;
    
  }

  fetchUserData(){
    
  	this.http.get('/update/getUserData')
  			.map(res => res.json())
            .subscribe(models =>{
                  // var that = this;
                  this.userData.splice(0, this.userData.length);
                  console.log('getUserData:',models);
                  models.forEach(
                    model=>{
                    	var newModel = new ComputeModel(model.model_type, model.inPortNumber, model.outPortNumber);
                    	model.nodes.forEach(
                    		node=>{
                    			newModel.createNode( node.x, node.y, node);
                    		});
                      	this.userData.push(newModel);
                    });
                  this.updatePorts(models);
                  console.log('create models:',this.userData);
                  // this.modelList = this.userData;
                });
  }

  findPortById(id: string) :Port{
    for(var i = 0; i < this.userData.length; i++){
      var nodes = this.userData[i].nodes;
      for(var j = 0; j < nodes.length; j++){
        var inports = nodes[j].inPorts;
        for(var k = 0; k < inports.length; k++){
          if(inports[k].id == id) return inports[k];
        }

        var outports = nodes[j].outPorts;
        for(var k = 0; k < outports.length; k++){
          if(outports[k].id == id) return outports[k];
        }
      }
    }
	  return null;
  }
  updatePorts(models){
  		models.forEach(
  			model=>{
  				model.nodes.forEach(
  					node=>{
  						node.inPorts.forEach(
  							port=>{
  								if(port.isConnected){

  									var findPort = this.findPortById(port.id);

                    // console.log('connected port：', port.id, this.userData[2].nodes[0].inPorts[1].id);
  									if(findPort) findPort.connect(this.findPortById(port.connectedPortId));
  								}
  							});
  					});
  			});
  }

  // fetchModels(){
  // 	this.http.get('/update/getModels')
  //           .map(res => res.json())
  //           .subscribe(models =>{
  //                 // var that = this;
  //                 console.log('getmodels:',this);
  //                 models.forEach(
  //                   model=>{
  //                     this.userData.push(new ComputeModel(model.model_type, model.inPortNumber, model.outPortNumber));
  //                   });
  //               });
            
		// console.log(that);
	// this.modelList[0].createNode(50,50);
	// this.modelList[1].createNode(50,200);
  // }

}
