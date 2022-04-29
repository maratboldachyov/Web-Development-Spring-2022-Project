import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models";
import {PRODUCTS} from "../fake_db";
import {CartService} from "../cart.service";
import {FavouriteProductService} from "../favourite-product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private CartService: CartService,
              private FavouriteProductService: FavouriteProductService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = PRODUCTS.find(product => product.id === productId);
  }
  addToCart(product: Product) {
    this.CartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  addToFavourite(product: Product) {
    this.FavouriteProductService.addToFavourite(product);
    window.alert('Your product has been added to the favourite!');
  }

}
