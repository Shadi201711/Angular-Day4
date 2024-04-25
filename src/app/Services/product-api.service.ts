import { Injectable } from '@angular/core';
import { Iproduct } from '../Model/iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
baseUrl: string = 'http://localhost:3001/products';

  constructor(private http:HttpClient) { }
  getAllProducts() {
    return this.http.get<Iproduct[]>(this.baseUrl);
  }
  getProductById(productId: number) {
    return this.http.get(`${this.baseUrl}/${productId}`);

  }
  addProduct(product: Iproduct) {
    return this.http.post(this.baseUrl, product);
  }
  updateProduct(productId: number,product:any) {
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }
  deleteProduct(productId: number) {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }

}
