import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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
        this.router.navigate(['dashboard']);
      }
    })
    
  }

}
