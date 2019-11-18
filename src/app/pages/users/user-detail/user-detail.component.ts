import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({ templateUrl: 'user-detail.component.html' })
export class UserDetailComponent {
    loading = false;
    users: User[];
    id:number;

    constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router,
    ) { }

    ngOnInit() {
        this.loading = true;
      this.route.paramMap.subscribe(params => {
        this.id = +params.get("id")
      });
      // could have been a dadicated endpoint but for now we are getting all users and filtering what user we need.
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
          this.users = users.filter(data => data.id === this.id);
        });
    }
/*
* get back to user lost page
 */
  getBack() {
    this.router.navigate(['/users']);
  }
}
