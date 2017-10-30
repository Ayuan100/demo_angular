import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { ModelComponent } from './components/model/model.component';
import { MyCanvasComponent } from './components/my-canvas/my-canvas.component';
import { NodeComponent } from './components/node/node.component';
import { OutportComponent } from './components/outport/outport.component';
import { InportComponent } from './components/inport/inport.component';
import { LineComponent } from './components/line/line.component';
import { ActiveLineComponent } from './components/active-line/active-line.component';
import { AccountComponent } from './components/account/account.component';

import { NodeService } from './services/node.service';
import { LineService } from './services/line.service';
import { AccountService } from './services/account.service';



@NgModule({
  declarations: [
    AppComponent,
    ModelListComponent,
    ModelComponent,
    MyCanvasComponent,
    NodeComponent,
    OutportComponent,
    InportComponent,
    LineComponent,
    ActiveLineComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    NgDragDropModule.forRoot(),
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    NodeService,
    LineService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
