import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  status:string = 'temp';

  loginStatusChanged(newStatus: string){
  	this.status = newStatus;
  }
}
