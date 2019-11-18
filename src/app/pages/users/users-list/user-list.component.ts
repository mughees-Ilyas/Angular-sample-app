import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { Router } from '@angular/router';

import { UserService, AuthenticationService } from '@app/_services';

@Component(
  {
    templateUrl: 'user-list.component.html',
    styleUrls: ['user-list.component.css']
  }

)
export class UserListComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService, private router: Router,) { }

    ngOnInit() {
      // set loading true to set the spinner while we get the data
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
    /*
     * navigate to new user page to add new user
     */
  newUser() {
    this.router.navigate(['/users/user/new']);
  }

}
