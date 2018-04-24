import { Component, OnInit } from '@angular/core';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
