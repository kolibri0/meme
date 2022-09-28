import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  symbols: string = '0123456789ABCDEF'
  color!: string

  constructor() { }

  ngOnInit(): void {
  }

  generateColor(){
    this.color = '#'
    for(let i = 0; i < 6; i++){
      this.color = this.color + this.symbols[Math.floor(Math.random() *  this.symbols.length)]
    }
  }

}
