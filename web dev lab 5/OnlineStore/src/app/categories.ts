import {Product, products} from './products';

export interface Category {
  id: number
  name: string
  product: Product[]
}
export const categories = [
  {
    id: 1,
    name: 'Phones',
    product: products.slice(0,5)
  },
  {
    id: 2,
    name: 'Headphones',
    product: products.slice(5,10)
  },
  {
    id: 3,
    name: 'Laptops',
    product: products.slice(10,15)
  },
  {
    id: 4,
    name: 'TV',
    product: products.slice(15,20)
  }
];
