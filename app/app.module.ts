import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // to use ngModel
import { HttpModule } from '@angular/http'; // to use Services


import { AppComponent } from './app.component';
import { UserComponent } from './Component/user/user.component';
import { ModifyUserComponent } from './Component/user/modify-user/modify-user.component';
import { DisplayUserComponent } from './Component/user/display-user/display-user.component';

import { UserServiceService } from './Component/user/Shared/user-service.service';
import { routing  } from './Shared/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ModifyUserComponent,
    DisplayUserComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing 
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
