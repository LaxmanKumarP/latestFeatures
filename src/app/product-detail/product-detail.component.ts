import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  constructor(private sharedService:SharedService, private router: ActivatedRoute){}
  productDetails:any = '';

  ngOnInit(){
    let id = Number(this.router.snapshot.paramMap.get('id'));
  this.sharedService.getSingleProduct(id).subscribe(res => {
    this.productDetails = res;
  console.log(this.productDetails);
  })
  }

}
