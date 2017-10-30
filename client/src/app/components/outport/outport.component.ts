import { Component, OnInit, Input, ElementRef, ViewChild  } from '@angular/core';

import { Port } from '../../models/model';

import { LineService } from '../../services/line.service';


@Component({
  selector: 'outport',
  templateUrl: './outport.component.html',
  styleUrls: ['./outport.component.css']
})
export class OutportComponent implements OnInit {
  @Input() port: Port;
  @ViewChild("portRef") portRef : ElementRef;


  constructor(private lineService: LineService) { }

  ngOnInit() {
    this.port.ref = this;
    
  }
  getPosition(){
    return {
       x: this.portRef.nativeElement.offsetLeft+this.port.node.x + this.portRef.nativeElement.offsetWidth/2, 
       y: this.portRef.nativeElement.offsetTop+this.port.node.y + this.portRef.nativeElement.offsetHeight 
    };
  }

  onDragStart(e){
  	// console.log('drag start', this.portRef);

    this.lineService.startDrag(this.getPosition());
  }
  onDragEnd(e){
    // console.log('ondrag end');
    this.lineService.stopDrag();
  }
  onDrag(e){
  	// console.log(e);
    this.lineService.draggingTo(e.clientX-300, e.clientY-50);
  }
}
