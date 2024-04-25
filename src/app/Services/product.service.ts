import { Injectable } from '@angular/core';
import { productsList } from '../Model/productList';
import { Iproduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  products: Iproduct[]=[];
  constructor() {
    this.products = productsList;
   }
  getProducts(): Iproduct[]{
    return this.products;
  }
  getProductById(productId: number): Iproduct | undefined {
    return this.products.find((product) => product.id == productId);
  }
  addProduct(product: Iproduct){
    this.products.push(product);
    return this.products;
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.id != productId);
    return this.products;
  }
  editProduct(productId: number, product: Iproduct) {
    this.products = this.products.map((prod) => {
      if (prod.id == productId) {
        return product;
      }
      return prod;
    });
    return this.products;
  }



}
