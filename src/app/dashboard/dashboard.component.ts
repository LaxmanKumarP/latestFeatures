import { Component,OnDestroy,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CustomTabelsComponent } from "../custom-tabels/custom-tabels.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';
import { faFontAwesomeAlt } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, CustomTabelsComponent, NgbProgressbarModule]
})
export class DashboardComponent implements OnInit, OnDestroy {
  data: any;
  cols!: any;
  categories: any;
  range:any = [0,100,300,500,1000,1500];
  unChangedData:any;
  subscription!: Subscription;
  

  constructor(private sharedService:SharedService, private router: Router){}
  ngOnInit(){
    console.log(this.router.url);
    this.getAllProducts();
this.sharedService.getCategories().subscribe(res => {
        this.categories = res;
              console.log(this.categories);


    })
  }

  selectItems(e:any){
    console.log(e.target.value,'se');
    if(e.target.value === 'All Items'){
    this.getAllProducts();
    }else{
      this.sharedService.getFilteredCategories(e.target.value).subscribe(res => {
        this.data = res;
      })
    }
  }

  getAllProducts(){
    // this.data = this.sharedService.getProducts();
    this.subscription = this.sharedService.getProducts().subscribe(res => {
      this.data = [...res];
      this.unChangedData = [...res];
      this.cols= Object.keys(this.data[0]);
    })
  }

  pageChange(e:any){
    this.sharedService.getRecordsOnLimit(e).subscribe(res => {
      this.data = [...res];
    })
  }

  selectPriceItems(e:any){
    this.data = this.unChangedData;
    if(e.target.value != 'All Items'){
      this.data = this.unChangedData;
      let NumValue = parseInt(e.target.value);
      this.data = this.data.filter((item: any) => Math.round(item.price) > NumValue);
      console.log(this.data);
    }
console.log(e.target.value);
  }

  logout(){
    sessionStorage.removeItem("token");
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  ngOnDestroy(){
   
    console.log('dashbodrd destroyed!!');
  }

  refreshData(){
    this.getAllProducts();
    if(this.subscription){
      this.subscription.unsubscribe();
      this.data = [];
    }
  
  }
}
