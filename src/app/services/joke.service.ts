import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jokes } from '../models/joke';





@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http: HttpClient
  ) { }

  //get request jokes
  jokeGenerate(genre: string | string[], count: number): Observable<any>{
    //number of jokes and joke type
    const params = new HttpParams()
    .set('type', 'twopart')
    .set('amount', count)
    //request
    return this.http.get<Jokes.joke | Jokes.jokes>(`https://v2.jokeapi.dev/joke/${genre}`, {params: params})
  }

}
