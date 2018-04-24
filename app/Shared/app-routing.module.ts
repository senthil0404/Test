import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { DisplayUserComponent } from '../Component/user/display-user/display-user.component'
import { ModifyUserComponent } from '../Component/user/modify-user/modify-user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DisplayUserComponent
  },
  {
    path: 'about',
    component: ModifyUserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); // To export the Routing variable
