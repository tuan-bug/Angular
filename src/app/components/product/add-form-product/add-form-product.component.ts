import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-form-product',
  templateUrl: './add-form-product.component.html',
  styleUrls: ['./add-form-product.component.scss']
})
export class AddFormProductComponent {

  products!: Product[];
  productName: string = '' ;
  productPrice: string = '' ;
  productImage: string ='' ;

  constructor(private router: Router, private productService: ProductService){}
  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  onSubmit(){
    
    const product = {
      id: this.products.length + 1,
      name: this.productName,
      price: this.productPrice,
      unit: 'cái',
      count: 114,
      deception: "hông tin liên hệ của công ty hoặc cửa hàng để người dùng có thể liên hệ nếu cần hỗ trợ hoặc thông tin bổ sung về sản phẩm",
      image: this.productImage, 
    }
    this.productService.addProduct(product);
    this.router.navigate(['product'])
  }
}
