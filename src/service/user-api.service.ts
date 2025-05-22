import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  UserObjectUrl = `http://localhost:3000/userObject`;
  constructor(private _http: HttpClient) {}

  getUserPost(): Observable<any> {
    console.log(this.UserObjectUrl);

    return this._http.get<any>(this.UserObjectUrl);
  }

  checkUser(user: any):Observable<any> {
    return this._http.post<any>(this.UserObjectUrl,user);
  }
}
