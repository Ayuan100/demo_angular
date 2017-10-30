import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import { NodeService } from '../../services/node.service';

import { Port } from '../../models/model';
@Component({
  selector: 'inport',
  templateUrl: './inport.component.html',
  styleUrls: ['./inport.component.css']
})
export class InportComponent implements OnInit {
  @ViewChild("portRef") portRef : ElementRef;

  @Input() port: Port;
  lightup: boolean = false;

  isDropAllowed = (dragData: any) => {
    console.log('is drop allowed:', this.port.isConnected==false);
    return this.port.isConnected;
  }

  constructor(private nodeService: NodeService) { 

  }

  ngOnInit() {
    this.port.ref = this;
  	
  }
  getPosition(){
    return {
       x: this.portRef.nativeElement.offsetLeft + this.port.node.x + this.portRef.nativeElement.offsetWidth/2, 
       y: this.portRef.nativeElement.offsetTop + this.port.node.y
    };
  }
  
  ngAfterViewInit() {

  }

  lightUpPort(){
    this.lightup = true;
  }
  unLightUpPort(){
    this.lightup = false;
  }

  onDrop(e){
    console.log('ondrop:',e);
    var outport = e.dragData;
    if(this.port.isConnected == false && outport.isConnected == false){
      this.port.connect(outport);
      this.nodeService.connectPort(outport, this.port);
    }
  }

}
