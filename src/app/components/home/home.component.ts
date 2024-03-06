import { Component } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products!: Product[];
  categories!: Category[];
  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngOnInit(){
    this.products = this.productService.getAll();
    this.categories = this.categoryService.getCategories();
  }

}
