import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit{
  productDetails:any;
  sharedService = inject(SharedService)

  ngOnInit() {
    this.sharedService.getSingleProduct(this.sharedService.productId ).subscribe(res => {
    this.productDetails = res;
  console.log(this.productDetails);
  })
    
  }

}
