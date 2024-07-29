import { Component,OnDestroy,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CustomTabelsComponent } from "../custom-tabels/custom-tabels.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';
import { faFontAwesomeAlt } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { filter, forkJoin, mergeMap, of, Subscription, take, takeLast } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
  

  constructor(public sharedService:SharedService, private router: Router, private http: HttpClient){}
  ngOnInit(){
    let productUrl = this.http.get('https://fakestoreapi.com/products/categories');
    let categoriesUrl = this.http.get('https://fakestoreapi.com/products');
    // this.getAllProducts();
// this.sharedService.getCategories().subscribe(res => {
//         this.categories = res;
// })
forkJoin([productUrl,categoriesUrl]).subscribe(res => {
  console.log(res,'fork');
  this.categories = res[0];
     this.data = res[1];
      this.unChangedData = res[1];
      this.cols= Object.keys(this.data[0]);
})
const source = of(productUrl,categoriesUrl);

// source.mergeMap(value =>).subscribe(res => {
//   console.log(res,'fork');
//   this.categories = res[0];
//      this.data = res[1];
//       this.unChangedData = res[1];
//       this.cols= Object.keys(this.data[0]);
// })

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
    // this.subscription = this.sharedService.getProducts().subscribe(res => {
    //   this.data = [...res];
    //   this.unChangedData = [...res];
    //   this.cols= Object.keys(this.data[0]);
    // })
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
    sessionStorage.removeItem('isAdmin');
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

  UsersRedirect(){
    this.router.navigate(['users']);
  }
}
