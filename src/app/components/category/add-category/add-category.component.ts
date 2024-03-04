import { Component } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  categories!: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  addCategory(name: string, description: string) {
    const newCategory: Category = {
      id: this.categories.length + 1,
      name: name,
      description: description
    };
    this.categoryService.addCategory(newCategory);
  }
}
