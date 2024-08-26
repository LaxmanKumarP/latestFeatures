import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.css'
})
export class DisplayCardsComponent {
  constructor(private sharedServe: SharedService) { }
  cardDetails:any;
  
  ngOnInit(){
    this.sharedServe.getCardsToDisplay().subscribe(res =>{
      console.log(res);
      this.cardDetails = res;
    })
  }
}
