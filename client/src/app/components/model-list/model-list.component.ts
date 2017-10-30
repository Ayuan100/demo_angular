import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ComputeModel } from '../../models/model';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'model-list',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  modelList: Array<ComputeModel>;

  constructor(private nodeService: NodeService) {
  	this.modelList = nodeService.getModels();
    // nodeService.fetchUserData();
    // console.log('model list:', this.modelList);
            
  }

  ngOnInit() {
  }
  onDragEnd(e){
    // console.log('ondragend:',e);
  }

}
