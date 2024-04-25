import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../Model/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServices } from '../../../Services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productId:any;
  product?:Iproduct;

  constructor(
    public ActivatedRoute:ActivatedRoute ,
    public ProductServices:ProductServices,
    public router: Router
  ) {}

    ngOnInit(): void {
      this.productId = this.ActivatedRoute.snapshot.params['id'];
      this.product = this.ProductServices.getProductById(this.productId);
    }
    backToProducts() {
      this.router.navigate(['/products']);
    }
}
