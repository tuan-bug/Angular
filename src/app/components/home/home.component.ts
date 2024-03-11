import { Component } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Goods } from 'src/app/model/goods.model';
import { Product } from 'src/app/model/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { GoodsService } from 'src/app/services/goods.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products!: Product[];
  categories: any;
  goods:any;
  constructor(
    private goodsService: GoodsService ,
    private productService: ProductService, 
    private categoryService: CategoryService
    ) {}

  ngOnInit(){
    this.products = this.productService.getAll();
    this.categories = this.categoryService.getCategories()
    .subscribe(category => {
      this.categories = category;
      console.log(this.categories);
    });

    this.goodsService.getProducts()
    .subscribe(goods => {
      this.goods = goods;
      console.log(this.goods); // Kiểm tra dữ liệu ở đây
    });
  }
  
}
