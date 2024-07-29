import { Component, OnInit } from '@angular/core';
import { CustomTabelsComponent } from "../custom-tabels/custom-tabels.component";
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CustomTabelsComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  data!:any;
  cols:any;
  address:any;
   constructor(private sharedService: SharedService){ 
    console.log('constructur called !!!!!!!!!!');
   }
   ngOnInit(){
    console.log('OnInit called !!!!!!!!!!');

    this.sharedService.addressObs$.subscribe(res => {
      this.address = res;
    }
    )
     this.sharedService.getUsers().subscribe(res => 
      {
        this.cols = Object.keys(res[0]);
        // this.cols = this.cols.filter((x:any) => x.toUpperCase() != '__V');
        this.cols.pop();
        res.forEach((element:any) => {
          if(element.name){
            return element.name = element.name.firstname +' ' + element.name.lastname;
          }else{
            return element;
          }
        })
      this.data = res;
     });
   }
 

   pageChange(e:any){
console.log(e);
   }
}
