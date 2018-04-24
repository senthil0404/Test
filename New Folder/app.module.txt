import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BetComponent } from './Component/bet/bet.component';

import { FormsModule } from '@angular/forms'; // to use ngModel
import { HttpModule } from '@angular/http'; // to use Services

import { BetServiceService } from './Component/bet/Shared/bet-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BetComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule 
  ],
  providers: [BetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
