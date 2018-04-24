import { Component, OnInit } from '@angular/core';

import { BetServiceService } from './Shared/bet-service.service';
import { BetDetails } from './Shared/bet-model.module';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  UserDetails: BetDetails[];
  BetId: string;
  Age: number;
  Address: string;
  showSave: boolean = true;
  showUpdate: boolean = false;
  load: boolean = true;
  constructor(private userServiceService: BetServiceService) {
    if (this.load) {
      this.getUserDetails();
      this.load = false;
    }
  }

  EditUser(UserDetail: BetDetails) {
    //this.BetId = UserDetail.BetId;
    //this.Age = Number(UserDetail.Age);
    //this.Address = UserDetail.Address;
    //this.showSave = false;
    //this.showUpdate = true;
  }
  CancelEdit() {
    //this.Name = '';
    this.Age = null;
    this.Address = '';
    this.showSave = true;
    this.showUpdate = false;
  }

  postUserDetails(UserDetail: BetDetails) {
    this.userServiceService.PostuserDetailsService(UserDetail);
    this.getUserDetails();
  }
  DeleteUserDetails(UserDetail: number) {
    this.userServiceService.DeleteuserDetailsService(UserDetail);
    this.getUserDetails();
  }
  getUserDetails() {
    this.userServiceService.getUserDetailsService().subscribe(user => { this.UserDetails = user });
  }
  ngOnInit() {
  }
}
