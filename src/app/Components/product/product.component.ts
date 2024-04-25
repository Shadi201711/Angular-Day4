import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Iproduct } from '../../Model/iproduct';
import { ProductApiService } from '../../Services/product-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Iproduct[] = [];

  constructor(public ProductServices: ProductApiService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.ProductServices.getAllProducts().subscribe((data) => {
      this.products = data;
    });

  }
  deleteProduct(productId: number) {
    this.ProductServices.deleteProduct(productId).subscribe((data) => {
      this.products = this.products.filter((product) => product.id != productId);
    });



  }
}


