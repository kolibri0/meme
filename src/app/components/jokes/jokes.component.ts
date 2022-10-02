import { Component, OnInit } from '@angular/core';
import { Jokes } from 'src/app/models/joke';
import { Type } from 'src/app/models/type';



import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent{

  //disabled for Any checkbox
  disabled: boolean = false
  //Any checkbox model
  any: Type = {id: 1, selected: false, name: "Any"}
  //genre checkbox model
  genres: Type[] = [
    {id: 2, selected: false, name: "Dark"},
    {id: 3, selected: false, name: "Programming"},
    {id: 4, selected: false, name: "Pun"},
    {id: 5, selected: false, name: "Spooky"},
    {id: 6, selected: false, name: "Miscellaneous"},
  ]
  //number of a joke
  counterJoke: number = 1
  //opend/closed joke
  open: boolean = false
  //hide/show joke 
  hideJoke: boolean = true
  //hide/show jokes
  hideJokes: boolean = true
  //a few jokes
  jokes!: Jokes.jokes
  //one joke
  joke!: Jokes.joke

  constructor(
    private jokeService: JokeService
  ){}

//Logic---------------------------------------------------------------

  changeGenre(){
    //name selected checkbox
    let name = this.genres.filter(x => x.selected == true).map(x => x.name.toString())
    if(name.length > 0){
      this.disabled = true
    }else{
      this.disabled = false
    }
  }
  
  generate(){
    //name selected checkbox
     let name = this.genres.filter(x => x.selected == true).map(x => x.name.toString())
    //name any checkbox
     let nameAny = this.any.name.toString()
     if(this.any.selected == true){
      //request
       this.jokeService.jokeGenerate(nameAny, this.counterJoke).subscribe({
        //response
        next: (res) => {
          //count joke
          (res.amount)? this.jokes = res : this.joke = res
        }
      })
     }else if(name.length > 0 && this.any.selected == false){
      this.jokeService.jokeGenerate(name, this.counterJoke).subscribe({
        next: (res) => {
          (res.amount)? this.jokes = res : this.joke = res
        }
      })
     }else{
       return
     }
  }


  hide(){
    this.hideJoke = !this.hideJoke
  }

  hideMore(){
    this.hideJokes = !this.hideJokes
  }

}
