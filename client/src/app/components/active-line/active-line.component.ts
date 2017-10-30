import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

import { LineService } from '../../services/line.service';

@Component({
  selector: '[active-line]',
  templateUrl: './active-line.component.html',
  styleUrls: ['./active-line.component.css']
})
export class ActiveLineComponent implements OnInit {
  connecting: boolean = false;
  startX	: number;
  startY 	: number;
  endX		: number;
  endY 		: number;
  data 		: string;

  
  constructor(private detector:ChangeDetectorRef, private lineService: LineService) {
  	this.lineService.connecting.subscribe(value=>{
        		if(value.status == true){
              this.start(value.x, value.y)
        		}
            else this.end();

  	  });
  	this.lineService.position.subscribe(value=>{
      // console.log('dragging:', value.x,',',value.y);
      if(this.endX != value.x || this.endY != value.y){
        this.moveTo(value.x, value.y);
        // 手动刷新，坑爹！
        this.detector.detectChanges();
      }
  	})
  }

  start(x,y){
    // console.log('start drag:',x,',',y);
    this.connecting = true;
    this.startX = x;
    this.startY = y;
    this.moveTo(x,y);
  }
  end(){
    // console.log('stop drag');
    this.connecting = false;
  }
  moveTo(x,y){
    this.endX = x;
    this.endY = y;

  	var middleX = (this.startX + this.endX)/2,
		    middleY = (this.startY + this.endY)/2,
		    extraX = this.startX,
		    extraY = (this.startY + middleY)/2;

	  this.data = 'M' + this.startX + ' ' + this.startY + ' ' +
				   'Q ' + extraX + ' ' + extraY + ' ' + middleX + ' ' + middleY + ' ' +
				   'T ' + this.endX	  + ' ' + this.endY ;
    // console.log('move to:', x, ',', y);

    // angular不刷新，只能手动设置！
    // var path = document.getElementById('active-line');
    // path.setAttribute('d', this.data);
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('after view init:');
    
    // this.start(10,10);
    // var that = this;
    // var x = 10, y = 10;
    // this.start(x,y)
    // setInterval( (()=>{

    //   this.move(this.endX+10,this.endY+10);
    // }),1000);
    // setTimeout((()=>{

    //   this.moveTo(191,144);
    // }),5000);

  }
}
