import {Component, Input, OnInit} from '@angular/core';
import {PRODUCTS} from "../fake_db";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = PRODUCTS;
  @Input() categoryId!: number;
  constructor() { }
  like(product: any){
    product.like += 1;
  }

  ngOnInit(): void {
  }

}
