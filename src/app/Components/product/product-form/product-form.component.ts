import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductApiService } from '../../../Services/product-api.service';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl('description', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1000),
    ]),
    imageUrl: new FormControl('imageUrl'),
    quantity: new FormControl(null, [Validators.required]),
  });
  productId: any;
  product: any;
  constructor(
    private productServices: ProductApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.productId = params['id'];
        this.getName.setValue('');
        this.getPrice.setValue(null);
        this.getQuantity.setValue(null);
        this.getDescription.setValue('');
        this.getImageUrl.setValue('');
      },
      });
      if (this.product!=0) {
        this.productServices.getProductById(this.productId).subscribe({
          next: (data) => {
            this.product = data;
            this.getName.setValue(this.product.name),
              this.getPrice.setValue(this.product.price),
              this.getDescription.setValue(this.product.description),
              this.getImageUrl.setValue(this.product.imageUrl),
              this.getQuantity.setValue(this.product.quentity);
          },
        });
        this.getName.setValue(this.product.name),
          this.getPrice.setValue(this.product.price),
          this.getDescription.setValue(this.product.description),
          this.getImageUrl.setValue(this.product.imageUrl),
          this.getQuantity.setValue(this.product.quentity);
    }
  }
  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getDescription() {
    return this.productForm.controls['description'];
  }
  get getImageUrl() {
    return this.productForm.controls['imageUrl'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  productHandler() {
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        this.productServices.addProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
        });
      } else {
        // edit
        this.productServices
          .getProductById(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
          });
      }
    } else {
      console.log('Form inValid');
    }
  }
}
