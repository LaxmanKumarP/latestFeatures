import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  sharedService = inject(SharedService)

  ngOnInit(): void {
    // this.sharedService.getCountries().subscribe(res => {
    //   console.log('res', res);
    // })
  }

}
