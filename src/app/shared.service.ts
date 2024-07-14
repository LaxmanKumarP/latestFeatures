import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  baseUrl ='https://fakestoreapi.com/'
  // https://fakestoreapi.com/products/categories

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.baseUrl+ 'products');
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
  // https://fakestoreapi.com/products?limit=5
  // https://fakestoreapi.com/products/category/jeweler

}
