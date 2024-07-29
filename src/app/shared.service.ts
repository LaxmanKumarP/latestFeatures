import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl ='https://fakestoreapi.com/';
  private barerToken = null;
  productId!: number;
  isAdmin:boolean = false;
  // addressObs$: Subject<any> = new Subject();
  // addressObs$: BehaviorSubject<any> = new BehaviorSubject<any>();
  addressObs$: BehaviorSubject<any> = new BehaviorSubject<any>({street:'zoo', city:'hyd', number: 123, geolocation: {lat:123, long:4567}});
  constructor(private http: HttpClient) { }

  setToken(tkn:any){
    this.barerToken = tkn
  }

  getToken(){
    return this.barerToken ? this.barerToken: localStorage.getItem('token') ;
  }

  getProducts():Observable<any>{
    return this.http.get(this.baseUrl+ 'products');
  }

  getUsers():Observable<any>{
    return this.http.get(this.baseUrl+ 'users');
  }

  getCategories():Observable<any>{
    return this.http.get(this.baseUrl+ 'products/categories' );
  }

  getFilteredCategories(item: string):Observable<any> {
    return this.http.get(this.baseUrl+ 'products/category/' + item);
  }

  getRecordsOnLimit(item: number):Observable<any> {
    return this.http.get(this.baseUrl+ 'products?limit=' + item);
  }

  getSingleProduct(id:number):Observable<any>{
    return this.http.get(this.baseUrl+ 'products/' +id);
  }

  loginUser(loginObj:any):Observable<any>{
    return this.http.post(this.baseUrl+ 'auth/login', loginObj);
  }

}
