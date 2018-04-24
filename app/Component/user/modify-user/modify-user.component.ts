import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../Shared/user-model';
import { UserServiceService } from '../Shared/user-service.service';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

  constructor(private userServiceService : UserServiceService) { }

  ngOnInit() {
  }

  postData(UserDetail: UserDetails) {
    this.userServiceService.PostuserDetails(UserDetail);
  }
}
