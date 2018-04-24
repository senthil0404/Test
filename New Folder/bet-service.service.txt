import { Injectable } from '@angular/core'
import { Http } from '@angular/http' //to use http get method   // Question 1
import 'rxjs/add/operator/map'; //to use map method .The Map method helps to convert the data to json format // Question 2
import { BetDetails } from '../Shared/bet-model.module';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BetServiceService {
  constructor(private http: Http) //to use http get method // Question 4
  {
  }
  getUserDetailsService() {

return this.http.get('http://localhost:56542/Api/Bet/Get')
      .map(res => res.json());
  }

  PostuserDetailsService(BetDetail: BetDetails) {
    this.http.post('http://localhost:56542/Api/Bet/Post', BetDetail).subscribe(status => console.log(JSON.stringify(status)));
  }
  UpdateuserDetailsService(BetDetail: BetDetails) {
    this.http.put('http://localhost:56542/Api/Bet/get/Put', BetDetail).subscribe(status => console.log(JSON.stringify(status)));
  }
  DeleteuserDetailsService(BetId: number) {
    this.http.delete('http://localhost:56542/Api/Bet/Delete?BetId=' + BetId).subscribe(status => console.log(JSON.stringify(status)));
  }
}
