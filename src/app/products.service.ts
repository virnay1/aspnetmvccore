import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>("https://localhost:44379/Products/GetAllProducts",{
      headers:{"Access-Control-Allow-Origin":"*"}     
  });
  }
}
