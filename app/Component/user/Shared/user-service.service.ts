import { Injectable } from '@angular/core'
import { Http } from '@angular/http' //to use http get method   // Question 1
import 'rxjs/add/operator/map'; //to use map method .The Map method helps to convert the data to json format // Question 2
import { UserDetails } from '../Shared/user-model';
import { Observable } from 'rxjs/Observable';

@Injectable()  // Question 3
export class UserServiceService {

  constructor(private http: Http) //to use http get method // Question 4
  {
  }

  getUserDetailsService() {
    return this.http.get('http://localhost:56542/Api/User/GetAllUser')
      .map(res => res.json());
  }

  PostuserDetailsService(UserDetail: UserDetails) {
    this.http.post('http://localhost:56542/Api/User/PostUser', UserDetail).subscribe(status => console.log(JSON.stringify(status)));
  }
  UpdateuserDetailsService(UserDetail: UserDetails) {
    this.http.put('http://localhost:56542/Api/User/PostUser', UserDetail).subscribe(status => console.log(JSON.stringify(status)));
  }
  DeleteuserDetailsService(userName: string) {
    this.http.delete('http://localhost:56542/Api/User/DeleteUser?userName='+userName).subscribe(status => console.log(JSON.stringify(status)));
  }
}
