import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from '../../../Model/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServices } from '../../../Services/product.service';
import { ProductApiService } from '../../../Services/product-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit, OnDestroy{

  productId:any;
  product?:any;
mySub:any;
  constructor(
    public ActivatedRoute: ActivatedRoute,
    public ProductServices: ProductApiService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.productId = this.ActivatedRoute.snapshot.params['id'];
  this.mySub=  this.ProductServices.getProductById(this.productId).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  }

  ngOnDestroy(): void {
  this.mySub.unsubscribe();
  }


  backToProducts() {
    this.router.navigate(['/products']);
  }
}
