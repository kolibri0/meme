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
    private http: HttpClient
  ){}





  ngOnInit(){
    // this.http.get(`https://api.memegen.link/images?filter=black`).subscribe((res) => console.log(res))
  }
}
