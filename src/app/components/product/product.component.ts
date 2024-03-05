import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products !: Product[];
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}
