import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductServices } from '../../Services/product.service';
import { Iproduct } from '../../Model/iproduct';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Iproduct[] = [];

  constructor(public ProductServices: ProductServices) {
    this.products = [];
  }

  ngOnInit(): void {
    this.products = this.ProductServices.getProducts();
  }
  deleteProduct(productId: number) {
    this.products = this.ProductServices.deleteProduct(productId);
  }
}


