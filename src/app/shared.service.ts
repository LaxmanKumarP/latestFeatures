import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl ='https://fakestoreapi.com/';
  private barerToken = null;
  productId!: number;
  // https://fakestoreapi.com/products/categories

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

  // https://fakestoreapi.com/auth/login
  // https://fakestoreapi.com/products/4
  // https://fakestoreapi.com/products?limit=5
  // https://fakestoreapi.com/products/category/jeweler
  // https://fakestoreapi.com/users

}
