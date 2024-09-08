import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private sharedServe: SharedService, private router: Router) {

  }
  uname!: string;
  psw!: string;

  onSubmit(e:any){
    let payLoad = {
      username: this.uname,
      password: this.psw
  }
    this.sharedServe.loginUser(payLoad).subscribe(res => {
      console.log('res',res);
      if(res){
        sessionStorage.setItem('token',res.token);
        localStorage.setItem('token',res.token);
        this.sharedServe.setToken(res.token);
        if(this.uname == "mor_2314"){
          this.sharedServe.isAdmin = true;
          sessionStorage.setItem('isAdmin', 'true');
        }
        this.sharedServe.isLoggedIn$.next(true);
        this.router.navigate(['dashboard']);
      }
    })
    
  }

}
