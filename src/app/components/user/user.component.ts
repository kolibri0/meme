import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type';
import { UserInformation } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

  random: boolean = false
  custom: boolean = false



  randomUser!: UserInformation.User
  customUser!: UserInformation.User


  types: Type[] = [
    {id: 1, name: 'location', selected: false},
    {id: 3, name: 'name', selected: false},
    {id: 2, name: 'gender', selected: false},
    {id: 4, name: 'email', selected: false},
    {id: 5, name: 'phone', selected: false},
    {id: 6, name: 'dob', selected: false},
    {id: 7, name: 'picture', selected: false},
    {id: 8, name: 'nat', selected: false},
  ]



  constructor(
    private userService: UserService
  ) { }


  takeRandomUser(){
    this.userService.randomUser().subscribe({
      next: (res: any) => this.randomUser = res.results[0]
    })
  }


  takeCustomUser(){
    let name = this.types.filter(x => x.selected == true).map(x => x.name.toString())
    this.userService.customUser(name).subscribe({
      next: (res: any) => this.customUser = res.results[0]
    })
  }




  //https://randomuser.me/api/?gender=female or male ----- пол
  //
  //https://randomuser.me/api/ ?inc=gender,name,nat ----- включить поля пол, имя, национальность 
  //
  //https://randomuser.me/api/
  //
  //https://randomuser.me/api/ ?exc=логин ------ исключить логин
  //
  //




  //https://web.archive.org/web/20160811185628/http://uifaces.com/faq
  //Please visit UI Faces FAQ for information regarding how you can use these faces.
}
