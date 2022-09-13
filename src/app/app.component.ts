import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    
  ){}





  ngOnInit(){
    // this.http.get("https://api.memegen.link/templates").subscribe((res) => console.log(res))
    // this.http.get(`https://api.memegen.link/images?filter=black`).subscribe((res) => console.log(res))
    // this.http.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single&amount=10`).subscribe((res) => console.log(res))
  }
}
