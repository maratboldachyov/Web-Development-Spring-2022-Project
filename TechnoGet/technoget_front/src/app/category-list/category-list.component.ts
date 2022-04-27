import { Component, OnInit } from '@angular/core';
import {CATEGORY} from "../fake_db";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = CATEGORY;
  constructor() { }

  ngOnInit(): void {
  }

}
