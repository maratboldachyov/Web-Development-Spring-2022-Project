export interface Category {
  id: number,
  name: string,
  image_url_category: string
}
export interface Product{
  categoryId: number,
  id: number,
  name: string,
  desc: string,
  image_url_product: string,
  show: boolean,
  price: number,
  rating: number,
  like: number,
}
