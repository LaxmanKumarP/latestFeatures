import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CustomTabelsComponent } from "../custom-tabels/custom-tabels.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CustomTabelsComponent]
})
export class DashboardComponent implements OnInit {
  data: any;
  cols!: any;
  constructor(private sharedService:SharedService){}
  ngOnInit(){
    this.sharedService.getProducts().subscribe(res => {
      this.data = res;
      this.cols= Object.keys(this.data[0]);
      // console.log(this.data);
      // console.log(this.cols);
    })
  }

}
