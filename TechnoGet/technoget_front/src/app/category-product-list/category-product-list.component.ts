import {Component, OnInit} from '@angular/core';
import {CATEGORY, PRODUCTS} from "../fake_db";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.css']
})
export class CategoryProductListComponent implements OnInit {
  categories = CATEGORY;
  products = PRODUCTS;
  public categoryId !: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routeParams.get('categoryId'));
  }

}
