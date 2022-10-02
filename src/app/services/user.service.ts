import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformation } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {}

    randomUser():Observable<UserInformation.User>{
      return this.http.get<UserInformation.User>('https://randomuser.me/api/')
    }


    customUser(types: any):Observable<UserInformation.User>{
      const params = new HttpParams().set('inc', types)
      return this.http.get<UserInformation.User>('https://randomuser.me/api/', {params: params})
    }
}
