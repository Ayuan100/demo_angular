import { Component, OnInit , Input} from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @Input() model;
  
  constructor() { }

  ngOnInit() {
  }

}
