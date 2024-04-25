import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product/product-details/product-details.component';
import { ProductFormComponent } from './Components/product/product-form/product-form.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent},
  { path: 'product/:id/edit', component: ProductFormComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }




];
