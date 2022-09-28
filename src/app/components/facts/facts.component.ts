import { Component, OnInit } from '@angular/core';
import { Fact } from 'src/app/models/fact';
import { FactsService } from 'src/app/services/facts.service';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {
  fact!: Fact

  constructor(
    private factsService: FactsService
  ) { }

  ngOnInit(): void {
    
  }


  takeFact(){
    this.factsService.fact().subscribe({
      next: (res: any) => this.fact = res[0]
    })
  }
}
