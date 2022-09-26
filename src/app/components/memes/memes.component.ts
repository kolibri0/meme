import { Component, OnInit } from '@angular/core';
import { MemeService } from 'src/app/services/meme.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent implements OnInit {

  allMeme!: any
  foundMeme!: any

  findMeme!: string

  page: number = 1

  checked: boolean = false

  constructor(
    private memeService: MemeService
  ) { }

  ngOnInit(): void {
    
  }


  takeAll(){
    if(this.allMeme)return
    return this.memeService.allMeme().subscribe({
      next: (res: any) => this.allMeme = res
    })
  }

  searchMeme(){
    this.memeService.findMeme(this.findMeme).subscribe({
      next: (res: any) => this.foundMeme=res
    })
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
