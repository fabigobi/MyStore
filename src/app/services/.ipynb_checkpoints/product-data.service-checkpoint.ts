import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  API_URL: string = "../../assets/data.json"
    
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.API_URL)
  }
}
