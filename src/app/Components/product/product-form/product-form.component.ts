import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServices } from '../../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  name: string = '';
  price: number = 0;
  description: string = '';
  imageUrl: string = '';
  quentity: number = 0;
  productId: any = null;
  product: any = null;

  constructor(
    private productServices: ProductServices,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId != 0) {
      this.product = this.productServices.getProductById(this.productId);
      this.name = this.product.name;
      this.price = this.product.price;
      this.description = this.product.description;
      this.imageUrl = this.product.imageUrl;
      this.quentity = this.product.quentity;
    }
  }

  productHandler(): void {
    if (this.productId == 0) {
      this.product = {
        id: this.productServices.products.length + 1,
        name: this.name,
        price: this.price,
        description: this.description,
        imageUrl: this.imageUrl,
        quentity: this.quentity
      };
      this.productServices.addProduct(this.product);
      this.router.navigate(['/product']);
    } else {
      this.product = {
        id: this.productId,
        name: this.name,
        price: this.price,
        description: this.description,
        imageUrl: this.imageUrl,
        quentity: this.quentity
      };
      this.productServices.editProduct(this.productId, this.product);
      this.router.navigate(['/product']);
    }
  }
}




