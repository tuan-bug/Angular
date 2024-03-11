import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent  {
  name: string = "";
  products: any;
  categories: any;
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private goodService: GoodsService,
    private categoryService: CategoryService,
    ){}
  ngOnInit(){
    this.categories = this.categoryService.getCategories()
    .subscribe(category => {
      this.categories = category;
      console.log(this.categories);
    });


    this.route.params.subscribe(data => {
      this.name = data["name"];
      console.log("name: " + this.name);
      this.getProductByCategory();
    })

  }

  getProductByCategory(){
    this.goodService.getProductCategory(this.name)
    .subscribe(p => {
      this.products = p;
      console.log(this.products);
    });
  }
}
