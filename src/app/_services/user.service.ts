import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
  /*
  * fucntion to get all the users from backend
   */
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    /*
     * function to add new user to system.
     * data: date to be send to user end point to add new user
     */
  addUser(data) {
    return this.http.put(`${environment.apiUrl}/users/add`, data);
  }
}
