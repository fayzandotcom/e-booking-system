import { Component, OnInit } from '@angular/core';
import { OnlineUserService } from '../services/online-user.service';
import { OnlineUser } from '../models/online-user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  /*firstName:string;
  lastName:string;
  email:string;
  password:string;*/

  onlineUser:OnlineUser;
  saved:boolean;

  constructor(private onlineUserService:OnlineUserService) {
    this.onlineUser = new OnlineUser(0, "", "", "", "");
    this.saved = false;
  }

  ngOnInit() {
  }

  doSave() {
    this.onlineUserService.addOnlineUser(this.onlineUser);
    this.saved = true;
  }
  
  goBack() {
    this.saved = false;
  }
}
