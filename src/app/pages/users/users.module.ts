import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


import {UserDetailComponent} from '@app/pages/users/user-detail/user-detail.component';
import { UserListComponent } from './users-list';
import { UsersRoutingModule } from './users-routing.module';
import {UserAddComponent} from '@app/pages/users/add-user';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  declarations: [
    UserDetailComponent,
    UserListComponent,
    UserAddComponent
  ]
})
export class UsersModule {}
