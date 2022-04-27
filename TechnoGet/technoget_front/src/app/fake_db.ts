import {Category, Product} from './models';

export const CATEGORY: Category[] = [
  { id: 1, name: 'title 1', image_url_category: ''},
  { id: 2, name: 'title 2', image_url_category: ''},
  { id: 3, name: 'title 3', image_url_category: ''}
]
export const PRODUCTS: Product[] = [
  { categoryId: 1,id: 1, name: 'title 1', desc: '', image_url_product: '', show: true},
  { categoryId: 1, id: 2, name: 'title 2', desc: '', image_url_product: '', show: true},
  { categoryId: 2, id: 3, name: 'title 3', desc: '', image_url_product: '', show: true},
  { categoryId: 2,id: 4, name: 'title 4', desc: '', image_url_product: '', show: true},
  { categoryId: 3, id: 5, name: 'title 5', desc: '', image_url_product: '', show: true},
  { categoryId: 3, id: 6, name: 'title 6', desc: '', image_url_product: '', show: true}
]
