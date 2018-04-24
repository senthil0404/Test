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
  constructor(private userServiceService: UserServiceService) {
    this.userServiceService.getUserDetails().subscribe(user => { this.UserDetails = user});
  }

  ngOnInit() {
       
  }

}

