import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fact } from '../models/fact';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor(
    private http: HttpClient,
  ) { }

  fact(): Observable<Fact>{
    const headers = new HttpHeaders().set('X-Api-Key', '6l6h5jApSEAnSI6yKUH0Sxbfi0tXWspOEiTImMeD')
    const params = new HttpParams().set('limit', 1)
    return this.http.get<Fact>("https://api.api-ninjas.com/v1/facts", {headers: headers, params: params} )
  }

}
