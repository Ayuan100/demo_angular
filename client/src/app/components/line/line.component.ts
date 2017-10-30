import { Component, OnInit, Input } from '@angular/core';

import { NodeService } from '../../services/node.service';

import { Line } from '../../models/model';


@Component({
  selector: '[line]',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() line: Line;
  startX	: number;
  startY	: number;
  endX		: number;
  endY		: number;
  data 		: string;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
  	this.line.ref = this;
  	this.paint();
  }

  paint(){
  	var start = this.line.outport.getPosition(),
  		end	  = this.line.inport.getPosition();
  	if(start && end){
  		this.startX = start.x;
  		this.startY = start.y;
  		this.endX	= end.x;
  		this.endY	= end.y;

  		var middleX = (this.startX + this.endX)/2,
  			  middleY = (this.startY + this.endY)/2,
  			  extraX = this.startX,
  			  extraY = (this.startY + middleY)/2;
  		this.data = 'M' + this.startX + ' ' + this.startY + ' ' +
  					   'Q ' + extraX + ' ' + extraY + ' ' + middleX + ' ' + middleY + ' ' +
  					   'T ' + this.endX	  + ' ' + this.endY ;
  	}
  	console.log('paint line:', start, end);
  }
  onClick(){
    console.log('click');
  }
  onFocus(){
    console.log('onfocus');
  }
  onKeyUp(e){
    console.log('keyup');
    // delete键
    if(e.keyCode == 8){
      this.delete();
    }
  }
  delete(){
    this.line.delete();
    this.nodeService.disconnectPort(this.line.outport, this.line.inport);
  }
}


// 新建path
		// var path = document.createElementNS('http://www.w3.org/2000/svg', "path");
		// path.classList.add('curve');
		// path.setAttribute('marker-end', "url(#markerArrow)");
		// document.getElementsByTagName('svg')[0].appendChild(path);
		// this.path = path;
		// // console.log('new path');
		// // console.log($(path));

		// Curve.prototype.paint = function(){
		
	// };