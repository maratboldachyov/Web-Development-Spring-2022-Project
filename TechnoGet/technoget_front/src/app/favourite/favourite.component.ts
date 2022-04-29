import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {PRODUCTS} from "../fake_db";
import {FavouriteProductService} from "../favourite-product.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  items = this.FavouriteProductService.getFavourite();
  products = PRODUCTS;
  constructor(private FavouriteProductService: FavouriteProductService) { }

  clearFavourite() {
    this.items = [];
    return this.items;
  }

}
