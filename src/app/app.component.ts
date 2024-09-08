import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isLogged = false;
  mySubscription: any;
  constructor( private router: Router, private sharedService: SharedService){ }
   
  ngOnInit(): void {
    this.sharedService.isLoggedIn$.subscribe(res =>{
      if(res){
        this.isLogged = res;
      }
    })
    

   }
  
  title = 'latestFeatures';
  logout(){
    sessionStorage.removeItem("token");
    localStorage.removeItem('token');
    sessionStorage.removeItem('isAdmin');
    this.sharedService.isLoggedIn$.next(false);
    this.isLogged = false;
    this.router.navigate(['/login']);
    
  }

  }
