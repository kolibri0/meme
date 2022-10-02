import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  symbols: string = '0123456789ABCDEF'
  color!: string
  colorRgb!: any

  constructor() { }

  ngOnInit(): void {
  }

  generateColor(){
    this.color = '#'
    for(let i = 0; i < 6; i++){
      this.color = this.color + this.symbols[Math.floor(Math.random() *  this.symbols.length)]
    }
    let colorNum = this.color.slice(1, 7)
    let red: any = colorNum.slice(0, 2)
    red = parseInt(red, 16)
    let green: any = colorNum.slice(2, 4)
    green = parseInt(green, 16)
    let blue: any = colorNum.slice(4,6)
    blue = parseInt(blue, 16)
    this.colorRgb = red + ',' + green + ',' + blue
  }
 
}
