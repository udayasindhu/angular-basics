import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from 'src/app/components/list-users/list-users.component';
import { NgModule } from '@angular/core';
import { AddUserComponent } from './components/add-user/add-user.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

const routes: Routes = [
  { path: 'app-intro', component: IntroductionComponent },
  { path: 'view-users', component: ListUsersComponent },
  { path: 'add-users', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
