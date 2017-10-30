import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class LineService {
  connecting : Subject<any>;
  position: Subject<any>;

  constructor() { 
    this.connecting = new Subject<any>();
    this.position = new Subject<any>();
	// this.status.subscribe(value => console.log('status:',value));
  }
  startDrag(o){
    // console.log('start drag:', x, ',', y);
    o.status = true;
  	this.connecting.next(o);
  }
  stopDrag(){
  	this.connecting.next({status: false});
  }
  draggingTo(x,y){
    // console.log('dragging:', x, ',', y);
  	this.position.next({x:x,y:y});
  }
}
