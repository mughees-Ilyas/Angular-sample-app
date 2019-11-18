import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, AuthenticationService } from '@app/_services';


@Component(
  {
    templateUrl: 'user-add.component.html',
  }

)
export class UserAddComponent {
    loading = false;
    submitted = false;
    userAddForm: FormGroup;
    error = '';

    constructor(
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) { }

    ngOnInit() {
      this.userAddForm = this.formBuilder.group({
        DateOfBirth: [null, Validators.required],
        firstName:['',
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z ]*$')]
        ],
        lastName:['',
          [
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern('^[a-zA-Z ]*$')]
        ],
        address:['',
          [
            Validators.required,
            Validators.maxLength(20)]
        ]
      });
    }

  // convenience getter for easy access to form fields
  get f() { return this.userAddForm.controls; }

/*
* submit the data for new user that has to be added in system
 */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userAddForm.invalid) {
      return;
    }

    this.loading = true;
    let dataObj = this.f.DateOfBirth.value;
    let dateOfbirth = dataObj.day + "-" + dataObj.month + "-"+ dataObj.year;
    let data =   { id: Date.now(), username: this.f.firstName.value, password: 'test', firstName: this.f.firstName.value, lastName: this.f.lastName.value, address:this.f.address.value, dob:dateOfbirth };
      this.userService.addUser(data)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['users']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
