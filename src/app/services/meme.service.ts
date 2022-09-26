import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(
    private http: HttpClient
  ) { }


  allMeme(){
    return this.http.get("https://api.memegen.link/templates")
  }

  findMeme(text: string){
    const params = new HttpParams().set('filter', text)

    return this.http.get("https://api.memegen.link/images?", {params: params})
  }
}
