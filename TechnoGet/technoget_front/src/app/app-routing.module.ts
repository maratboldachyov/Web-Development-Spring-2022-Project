import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryProductListComponent} from "./category-product-list/category-product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {ShippingComponent} from "./shipping/shipping.component";

const routes: Routes = [
  {path: '', component:CategoryListComponent},
  {path: 'categories/:categoryId', component: CategoryProductListComponent},
  {path: 'categories/:categoryId/products/:productId', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

