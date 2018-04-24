import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../Shared/user-service.service';
import { UserDetails } from '../Shared/user-model';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  UserDetails: UserDetails[];
  Name: string;
  Age: number;
  Address: string;
  showSave: boolean = true;
  showUpdate: boolean = false;
  load: boolean = true;
  constructor(private userServiceService: UserServiceService) {
    if (this.load) {
      this.getUserDetails();
      this.load = false;
    }
  }

  EditUser(UserDetail: UserDetails) {
    this.Name = UserDetail.Name;
    this.Age = Number(UserDetail.Age);
    this.Address = UserDetail.Address;
    this.showSave = false;
    this.showUpdate = true;
  }
  CancelEdit() {
    this.Name = '';
    this.Age = null;
    this.Address = '';
    this.showSave = true;
    this.showUpdate = false;
  }

  postUserDetails(UserDetail: UserDetails) 
  {
    this.userServiceService.PostuserDetailsService(UserDetail);
    this.getUserDetails();
  }
  DeleteUserDetails(UserDetail: string) {
    alert(UserDetail);
    this.userServiceService.DeleteuserDetailsService(UserDetail);
    this.getUserDetails();
  }
  getUserDetails() {
    this.userServiceService.getUserDetailsService().subscribe(user => { this.UserDetails = user });
  }
  ngOnInit() {       
  }
}

