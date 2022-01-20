import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakejsonService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  getUsers(){
    return this.http.get('https://fakestoreapi.com/users');
  }

  getProdCat(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

}
