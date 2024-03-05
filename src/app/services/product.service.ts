import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id: 1, name: 'Hoa bir nganj',price: '12309', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 2, name: 'Hoa hồng xanh', price: '123', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 3, name: 'Hoa bay nhảy', price: '114', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 3, name: 'Hoa nở hoa',price: '444', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 5, name: 'Hoa hồng đỏ', price: '756', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},

  ]

  constructor() { }

  getAll(): Product[]{
    return this.products;
  }

  addProduct(product: Product){
    this.products.push(product);
  }
}
