import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class UserServiceService {

  constructor(private http: Http) {}

  getUser(user): any {
    
   /* let headers = new Headers();
    let postResponse;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users',
        JSON.stringify(user),
        {headers:headers})
        .map((res: Response) => res.json())*/
   return this.http.get('http://localhost:3000/users?email='+user.email+'&password='+user.password).map((res: Response) => res.json());
  }


}
