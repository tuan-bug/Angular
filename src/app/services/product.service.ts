import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id: 1, name: 'Hoa bir nganj',price: '12309', unit: 'cái', count: 113, deception: 'hông tin liên hệ của công ty hoặc cửa hàng để người dùng có thể liên hệ nếu cần hỗ trợ hoặc thông tin bổ sung về sản phẩm.', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 2, name: 'Hoa hồng xanh', price: '123', unit: 'cái', count: 113, deception: 'hông tin liên hệ của công ty hoặc cửa hàng để người dùng có thể liên hệ nếu cần hỗ trợ hoặc thông tin bổ sung về sản phẩm.', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 3, name: 'Hoa bay nhảy', price: '114', unit: 'cái', count: 113, deception: 'hông tin liên hệ của công ty hoặc cửa hàng để người dùng có thể liên hệ nếu cần hỗ trợ hoặc thông tin bổ sung về sản phẩm.', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 3, name: 'Hoa nở hoa',price: '444', unit: 'cái', count: 113, deception: 'hông tin liên hệ của công ty hoặc cửa hàng để người dùng có thể liên hệ nếu cần hỗ trợ hoặc thông tin bổ sung về sản phẩm.', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},
    {id: 5, name: 'Hoa hồng đỏ', price: '756', unit: 'cái', count: 113, deception: 'hông tin liên hệ của công ty hoặc cửa hàng để người dùng có thể liên hệ nếu cần hỗ trợ hoặc thông tin bổ sung về sản phẩm.', image: 'https://i.pinimg.com/236x/f7/be/c8/f7bec8acbe58578f6f7f65423c777a13.jpg'},

  ]

  constructor(private loggerService: LoggerService) { }

  getAll(): Product[]{
    this.loggerService.log("Call get all product")
    return this.products;
  }
  getProductById(id: number): Observable<Product | undefined> {

    const product = this.products.find(p=>p.id == Number(id))
    return of(product)

  }

  addProduct(product: Product){
    this.products.push(product);
  }
}
