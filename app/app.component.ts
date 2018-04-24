import { Component } from '@angular/core';
import { UserComponent } from './Component/user/user.component';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
