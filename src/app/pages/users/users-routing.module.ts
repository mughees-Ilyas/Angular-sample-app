import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './users-list';
import {AuthGuard} from '@app/_helpers';
import {UserDetailComponent} from '@app/pages/users/user-detail/user-detail.component';
import {UserAddComponent} from '@app/pages/users/add-user';

const heroesRoutes: Routes = [
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailComponent,  canActivate: [AuthGuard] },
  { path: 'users/user/new', component: UserAddComponent,  canActivate: [AuthGuard] }

];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
