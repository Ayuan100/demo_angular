import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

import { AccountService } from '../../services/account.service';
import {NgbModal, NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  status: string = "temp";
  @Output() onChange = new EventEmitter<string>();

  user: string = '';

  email: string;
  password: string;

  newEmail: string;
  newPassword: string;

  signUpWindow: NgbModalRef;

  constructor(private accountService: AccountService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.accountService.getStatus()
      .subscribe(res => {
        console.log('status:', res);
        if(res.user){
          this.status = 'login';
          this.user = res.user;
        }
        else this.status = 'temp';
        this.onChange.emit(this.status);
      });
  }

  open(content) {
    this.signUpWindow = this.modalService.open(content);
  }

  login(){
  	console.log('login:',this.email, ' pass:',this.password);
  	this.accountService.login(this.email,this.password)
  		.subscribe( res => {
  			console.log('login result:',res);
  			if(res.success == "success"){
          this.status = "login";
          this.onChange.emit('login');
          this.user = this.email;
          this.email = '';
          this.password = '';
  			}
  		});
  }
  signup(){
  	console.log('signup',this.newEmail, ' pass:',this.newPassword);
  	this.accountService.signup(this.newEmail,this.newPassword)
  		.subscribe( res => {
  			console.log('signup result:',res);
        if(res.success == "success"){
          this.status = "login";
          this.modalService
          this.signUpWindow.close();

          this.onChange.emit('login');
          this.user = this.newEmail;
          this.newEmail = '';
          this.newPassword = '';
        }
  		});
  }
  logout(){
    console.log('logout', this.user);
    this.accountService.logout()
      .subscribe(res => {
        console.log('logout result:', res);
        this.status = "logout";
        this.onChange.emit('logout');
      });
    
  }
}
