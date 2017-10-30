import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';

import { NodeService } from '../../services/node.service';
import { LineService } from '../../services/line.service';

import { ComputeModel, ComputeNode } from '../../models/model';


@Component({
  selector: 'my-canvas',
  templateUrl: './my-canvas.component.html',
  styleUrls: ['./my-canvas.component.css']
})
export class MyCanvasComponent implements OnInit {

  modelList: Array<ComputeModel>=[];

  @Input() status: string;

  constructor(private nodeService: NodeService) { 
  	this.modelList = this.nodeService.getUserData();
  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChange){
      if(this.status != 'temp') this.nodeService.fetchUserData();  
    // else this.modelList = [];
  }

  onModelDrop(e: DropEvent) {
        // Get the dropped data here
        // console.log(e);
        var data = e.dragData;
        if(data instanceof ComputeModel){
          this.nodeService.createNode(data, e.nativeEvent.offsetX, e.nativeEvent.offsetY);

        }
        else if( data instanceof ComputeNode){
          this.nodeService.moveNode(data, e.nativeEvent.offsetX, e.nativeEvent.offsetY );
        }
        
  }
}
