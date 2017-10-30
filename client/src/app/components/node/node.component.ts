import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { ComputeNode } from '../../models/model';

@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() node: ComputeNode;
  @ViewChild('nodeRef', {read: ElementRef}) child;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  	// console.log('after view init:', this.child);
  }
}
