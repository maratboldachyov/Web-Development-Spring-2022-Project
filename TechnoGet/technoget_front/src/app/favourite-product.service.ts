import { Injectable } from '@angular/core';
import {Product} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FavouriteProductService {
  items: Product[] = [];
  constructor(private http: HttpClient) { }
  addToFavourite(product: Product) {
    this.items.push(product);
  }

  getFavourite() {
    return this.items;
  }

  clearFavourite() {
    this.items = [];
    return this.items;
  }

}
