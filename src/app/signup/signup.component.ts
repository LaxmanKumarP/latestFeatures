import { Component, inject, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  sharedService = inject(SharedService)
  contriesData: any;
  statesData: any;
  citiesData: any;
  stateDisable: boolean = false;
  cityDisable: boolean = false;


  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    // this.sharedService.getCountries().subscribe(res => {
    //   console.log('res', res);
    // })
    this.signUPForm.valueChanges.subscribe((changes: any) => {
      console.log('changes', changes);
    })
    this.getToken();
  }

  signUPForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.maxLength]],
    lastName: [],
    email: [],
    password: [],
    confirmPassword: [],
    address: [],
    selectedOption: [],
    selectCheck: [],
    selectCountry: [],
    selectState: [{ value: '', disabled: true }],
    selectCity: [{ value: '', disabled: true }]
  })

  getToken() {
    this.sharedService.getAcessToken().subscribe(res => {
      if (res) {
        this.sharedService.cascadeApiToken = res.auth_token;
        setTimeout(() => {
          this.getCountriesList();
        }, 100);
      }
    })
  }


  getCountriesList() {
    this.sharedService.getCountries().subscribe(res => {
      console.log('countries', res);
      this.contriesData = res;
    })
  }


  selectCountry(e: any) {
    console.log(e.target.value, 'e');
    this.sharedService.getStates(e.target.value).subscribe(res => {
      console.log(res, 'states')
      this.statesData = res;
      this.signUPForm.controls.selectState.enable();
    })
  }

  selectState(e: any) {
    console.log(e.target.value, 'e');
    this.sharedService.getCities(e.target.value).subscribe(res => {
      console.log(res, 'states')
      this.citiesData = res;
      this.signUPForm.controls.selectCity.enable();
    })
  }

  changeLanguage(e:any){
    debugger;
    let languages:any=[];
    if(e.target.checked){

      languages.push(e.target.value);
    }
this.signUPForm.controls.selectCheck.patchValue(languages);

  }

  checkdeactivate(){
    this.router.navigate(['dashboard']);
  }
}


