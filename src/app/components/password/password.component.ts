import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*:=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  length!: number
  password = ""


  constructor(
    private clipboard: Clipboard,
  ) { }

  ngOnInit(): void {
  }


  generatePassword(){

    this.password = ""
    for (var i = 0; i < this.length; i++) {
      var randomNumber = Math.floor(Math.random() * this.chars.length);
      this.password += this.chars.substring(randomNumber, randomNumber +1);
     }
  }

  copy(el: any){
    el.select()
    this.clipboard.copy(el.value)    
  }
}
